import React from "react";
import { FaLock, FaQuestion, FaEllipsisH, FaTimes } from "react-icons/fa";

export default function AppointmentCalendar() {
  return (
    <div className="container mx-auto p-6 h-[1000px] bg-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h1 className="text-xl font-bold">ABC Therapy Clinic</h1>
            <p className="text-gray-500">Managing clinic</p>
          </div>
        </div>
        <div className="flex items-center">
          <label className="text-gray-700 mr-2">Doctor:</label>
          <select className="border border-gray-300 rounded p-2">
            <option>Select a Doctor for Availability</option>
          </select>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-4 mb-4">
        {["Today", "Back", "Next"].map((nav) => (
          <button key={nav} className="text-green-500">
            {nav}
          </button>
        ))}
      </div>

      {/* Date and Week Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-green-500">Prev</button>
        <p className="font-bold">Feb 20 - 26</p>
        <button className="text-green-500">Next</button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center font-bold text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Time Slots with Appointments */}
      <div className="relative">
        {/* Time slots column */}
        <div className="absolute left-0 top-0 grid grid-rows-10 gap-2 h-full">
          {[
            "12:00 AM", "1:00 AM", "2:00 AM", "3:00 AM", "4:00 AM",
            "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"
          ].map((time) => (
            <div key={time} className="text-gray-500 text-sm">
              {time}
            </div>
          ))}
        </div>

        {/* Appointment Blocks Grid */}
        <div className="ml-20 grid grid-cols-7 grid-rows-13 gap-2">
          {/* Rendering blocks based on your provided UI */}
          <div className="bg-black text-white col-start-3 row-start-2 flex items-center justify-center rounded text-sm font-semibold">
            3AM - 4AM
          </div>
          <div className="bg-orange-500 text-white col-start-2 row-start-6 flex items-center justify-center rounded text-sm font-semibold">
            6AM - 7AM
          </div>
          <div className="bg-green-500 text-white col-start-3 row-start-6 flex items-center justify-center rounded text-sm font-semibold">
            <FaLock className="mr-2" /> 8AM - 9AM
          </div>
          <div className="bg-red-500 text-white col-start-4 row-start-6 flex items-center justify-center rounded text-sm font-semibold">
            <FaQuestion className="mr-2" /> 6AM - 7AM
          </div>
          <div className="bg-yellow-500 text-white col-start-4 row-start-7 flex items-center justify-center rounded text-sm font-semibold">
            <FaEllipsisH className="mr-2" /> 6AM - 7AM
          </div>
          <div className="bg-gray-500 text-white col-start-5 row-start-7 flex items-center justify-center rounded text-sm font-semibold">
            <FaTimes className="mr-2" /> 6AM - 7AM
          </div>
        </div>
      </div>

      {/* Legend Section */}
      <div className="flex space-x-4 mt-6">
        {[
          { color: "bg-black", label: "Unassigned" },
          { color: "bg-green-500", label: "Available" },
          { color: "bg-orange-500", label: "Upcoming appointment" },
          { color: "bg-red-500", label: "Completed appointment" },
          { color: "bg-yellow-500", label: "Pending appointment" },
          { color: "bg-gray-500", label: "Canceled appointment" },
        ].map((legend) => (
          <div key={legend.label} className="flex items-center">
            <div className={`w-4 h-4 mr-2 ${legend.color} rounded`}></div>
            <span>{legend.label}</span>
          </div>
        ))}
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between mt-8">
        <button className="py-2 px-6 bg-white text-green-500 border border-green-500 rounded">
          Cancel
        </button>
        <button className="py-2 px-6 bg-green-500 text-white rounded">
          Update
        </button>
      </div>
    </div>
  );
}
