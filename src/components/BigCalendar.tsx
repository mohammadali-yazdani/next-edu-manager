"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import { calendarEvents } from "@/lib/data";

export default function BigCalendar() {
  return (
    <FullCalendar
      slotMinTime="08:00:00"
      slotMaxTime="17:00:00"
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
      events={calendarEvents}
      headerToolbar={{
        start: "prev next",
        end: "title timeGridWeek timeGridDay",
      }}
      height={800}
      contentHeight={800}
      expandRows={true}
    />
  );
}
