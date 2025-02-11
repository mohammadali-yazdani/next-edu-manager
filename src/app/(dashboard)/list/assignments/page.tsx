import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, assignmentsData } from "@/lib/data";
import {
  ArrowDownWideNarrow,
  Trash2,
  Edit,
  Plus,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

interface Assignment {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
}

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AssignmentsListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-eduPurpleLight"
    >
      <td>
        <div className="flex items-center gap-4 p-4">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="size-7 grid place-items-center rounded-full bg-eduSky">
              <Edit color="white" size={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="size-7 grid place-items-center rounded-full bg-eduPurple">
              <Trash2 color="white" size={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="size-8 grid place-items-center rounded-full bg-eduYellow">
              <SlidersHorizontal size={14} />
            </button>
            <button className="size-8 grid place-items-center rounded-full bg-eduYellow">
              <ArrowDownWideNarrow size={14} />
            </button>
            {role === "admin" && (
              <button className="size-8 grid place-items-center rounded-full bg-eduYellow">
                <Plus size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
