import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import PerformanceChart from "@/components/PerformanceChart";
import { Calendar, Droplet, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const StudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-eduSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="size-36 rounded-full object-cover aspect-square"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Theodore Rodgers</h1>
              <p className="text-sm text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 justify-between gap-1 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <Droplet size={14} />
                  <span>A</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>January 2025</span>
                </div>
                <div className="flex items-center gap-2 2xl:col-span-2">
                  <Mail size={14} />
                  <span>student@example.com</span>
                </div>
                <div className="flex items-center gap-2 2xl:col-span-2">
                  <Phone size={14} />
                  <span>+989123456789</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 grid md:grid-cols-2 gap-4">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="">
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-eduSkyLight" href="/">
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-eduPurpleLight" href="/">
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-eduYellowLight" href="/">
              Student&apos;s Results
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Student&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-eduSkyLight" href="/">
              Student&apos;s Assignments
            </Link>
          </div>
        </div>
        <PerformanceChart />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
