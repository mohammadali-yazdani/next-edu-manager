import { Bell, MessageCircleMore, Search } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end md:justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <div className="py-2">
          <Search size={14} />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent self-stretch outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6">
        <div className="bg-white rounded-full size-7 grid place-items-center cursor-pointer">
          <MessageCircleMore size={20} />
        </div>
        <div className="relative bg-white rounded-full size-7 grid place-items-center cursor-pointer">
          <Bell size={20} />
          <span className="absolute -top-3 -end-3 size-5 grid place-items-center bg-purple-500 text-white rounded-full text-xs">
            1
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-end">Admin</span>
          </div>
          <div className="size-9 rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              width={36}
              height={36}
              alt=""
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
