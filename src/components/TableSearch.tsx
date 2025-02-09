import { Search } from "lucide-react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <div className="py-2">
        <Search size={14} />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent self-stretch outline-none"
      />
    </div>
  );
};

export default TableSearch;
