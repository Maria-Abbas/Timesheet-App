"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { WeeklyTimesheet } from "@/types/timesheet";
import Header from "@/components/Header";

export default function DashboardPage() {
  const router = useRouter();
  const [timesheets, setTimesheets] = useState<WeeklyTimesheet[]>([]);

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/api/timesheets");
      if (res.ok) {
        const data = await res.json();
        setTimesheets(data);
      }
    }
    loadData();
  }, []);

  function getStatusBgColor(status: string) {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-[#DEF7EC] text-[#027A48]";
      case "incomplete":
        return "bg-[#FDF6B2] text-[#854D00]";
      case "missing":
        return "bg-[#FCE8F3] text-[#9D174D]";
      default:
        return "";
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    
      <Header />


      <main className="flex-1 flex flex-col items-center p-4 sm:p-6 md:p-8">
        <div
          className="bg-white rounded-md w-full max-w-6xl p-6 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),_0_1px_3px_0px_rgba(0,0,0,0.1)]"
          style={{ border: "1px solid #F9FAFB" }}
        >
          <h2 className="text-lg font-semibold mb-6 text-gray-800">Weekly Timesheets</h2>
          <div className="overflow-x-auto">
            <table
              className="w-full border-collapse text-left text-sm rounded-md overflow-hidden"
              style={{ border: "1px solid #F9FAFB" }}
            >
              <thead className="bg-[#F9FAFB]">
                <tr>
                  <th className="px-4 py-2 border border-[#F9FAFB] bg-[#F9FAFB] rounded-tl-md">WEEK#</th>
                  <th className="px-4 py-2 border border-[#F9FAFB]">DATE</th>
                  <th className="px-4 py-2 border border-[#F9FAFB]">STATUS</th>
                  <th className="px-4 py-2 border border-[#F9FAFB] rounded-tr-md">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {timesheets.map((item) => (
                  <tr key={item.weekNo} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-[#F9FAFB] bg-[#F9FAFB]">{item.weekNo}</td>
                    <td className="px-4 py-2 border border-[#F9FAFB]">{item.dateRange}</td>
                    <td className="px-4 py-2 border border-[#F9FAFB]">
                      <span
                        className={`inline-block px-3 py-1 rounded-md font-medium uppercase ${getStatusBgColor(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 border border-[#F9FAFB]">
                     
                      <button
  onClick={() => router.push(`/timesheets/${item.weekNo}?action=${item.action}`)}
  className="text-blue-600 hover:underline font-medium"
>
  {item.action.charAt(0).toUpperCase() + item.action.slice(1)}
</button>

                    </td>
                  </tr>
                ))}

                {timesheets.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-gray-500 py-4">
                      Loading timesheets...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="mt-8 bg-white rounded-md max-w-6xl w-full p-4 flex justify-center items-center text-gray-500 text-sm select-none">
          <span className="mr-2 text-base">©</span> 2024 tentewnty. All rights reserved.
        </div>
      </main>
    </div>
  );
}
