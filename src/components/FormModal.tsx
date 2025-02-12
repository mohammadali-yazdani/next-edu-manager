"use client";

import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { useState } from "react";
import TeacherForm from "./forms/Teacher";

const iconMap: Record<string, IconName> = {
  create: "plus",
  update: "edit",
  delete: "trash-2",
};

const FormModal = ({
  table,
  type,
  data,
  id,
  color = "#fff",
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: unknown;
  id?: number;
  color?: string;
}) => {
  const bgColor =
    type === "create"
      ? "bg-eduYellow"
      : type === "update"
      ? "bg-eduSky"
      : "bg-eduPurple";

  const [open, setOpen] = useState(false);

  const iconName = iconMap[type];

  const Form = () => {
    return type === "delete" && id ? (
      <form>
        <div className="py-4">
          <p className="text-gray-700 font-medium">
            All data will be lost. Are you sure you want to delete this {table}?
          </p>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setOpen(false)}
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md text-white bg-red-700 hover:bg-red-900">
            Confirm
          </button>
        </div>
      </form>
    ) : (
      <TeacherForm data={""} type="create" />
    );
  };

  return (
    <>
      <button
        className={`grid place-items-center rounded-full size-7 ${bgColor}`}
        style={{ color }}
        onClick={() => setOpen(true)}
      >
        <DynamicIcon name={iconName} size={16} />
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-6 transition-transform transform scale-100 opacity-100 animate-fadeIn
"
          >
            {/* TOP */}
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-semibold capitalize">
                {type} {table}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {/* CONTENT */}
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
