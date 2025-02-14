"use client";

import { DynamicIcon, IconName } from "lucide-react/dynamic";
import dynamic from "next/dynamic";
import { JSX, useState } from "react";
// import TeacherForm from "./forms/Teacher";
// import StudentForm from "./forms/Student";

// ! Optimize Import
const TeacherForm = dynamic(() => import("./forms/Teacher"), {
  loading: () => <h1>Loading ...</h1>,
});
const StudentForm = dynamic(() => import("./forms/Student"), {
  loading: () => <h1>Loading ...</h1>,
});
const AssignmentForm = dynamic(() => import("./forms/Assignment"), {
  loading: () => <h1>Loading ...</h1>,
});

const AnnouncementForm = dynamic(() => import("./forms/Announcement"), {
  loading: () => <h1>Loading ...</h1>,
});

const AttendanceForm = dynamic(() => import("./forms/Attendance"), {
  loading: () => <h1>Loading ...</h1>,
});

const ClassForm = dynamic(() => import("./forms/Class"), {
  loading: () => <h1>Loading ...</h1>,
});

const EventForm = dynamic(() => import("./forms/Event"), {
  loading: () => <h1>Loading ...</h1>,
});

const ExamForm = dynamic(() => import("./forms/Exam"), {
  loading: () => <h1>Loading ...</h1>,
});

const LessonForm = dynamic(() => import("./forms/Lesson"), {
  loading: () => <h1>Loading ...</h1>,
});

const ParentForm = dynamic(() => import("./forms/Parent"), {
  loading: () => <h1>Loading ...</h1>,
});

const ResultForm = dynamic(() => import("./forms/Result"), {
  loading: () => <h1>Loading ...</h1>,
});

const SubjectForm = dynamic(() => import("./forms/Subject"), {
  loading: () => <h1>Loading ...</h1>,
});

const iconMap: Record<string, IconName> = {
  create: "plus",
  update: "edit",
  delete: "trash-2",
};

const forms: {
  [key: string]: (type: "create" | "update", data?: unknown) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
  assignment: (type, data) => <AssignmentForm type={type} data={data} />,
  announcement: (type, data) => <AnnouncementForm type={type} data={data} />,
  attendance: (type, data) => <AttendanceForm type={type} data={data} />,
  class: (type, data) => <ClassForm type={type} data={data} />,
  event: (type, data) => <EventForm type={type} data={data} />,
  exam: (type, data) => <ExamForm type={type} data={data} />,
  lesson: (type, data) => <LessonForm type={type} data={data} />,
  parent: (type, data) => <ParentForm type={type} data={data} />,
  result: (type, data) => <ResultForm type={type} data={data} />,
  subject: (type, data) => <SubjectForm type={type} data={data} />,
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
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
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
