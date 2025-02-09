import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col bg-white p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          </div>
          <div className="size-full mt-4">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
