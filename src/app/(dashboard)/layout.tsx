import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen relative">
      <div className="grid grid-cols-[14%_auto] md:grid-cols-[8%_auto] lg:grid-cols-[18%_auto] xl:grid-cols-[14%_auto]">
        {/* LEFT - Sidebar */}
        <aside className="p-4 bg-white max-h-screen overflow-y-auto scrollbar-thin sticky top-0 self-start">
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2"
          >
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <span className="hidden lg:block font-bold">EDU Manager</span>
          </Link>
          <Menu />
        </aside>

        {/* RIGHT - Content */}
        <div className="bg-[#F7F8FA] min-h-screen overflow-x-hidden flex flex-col">
          <Navbar />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
