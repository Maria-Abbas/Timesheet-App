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

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Component */}
      <Header />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-md w-full max-w-4xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Weekly Timesheets</h2>
          <table className="w-full border border-gray-200 text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 border-b">WEEK#</th>
                <th className="px-4 py-2 border-b">DATE</th>
                <th className="px-4 py-2 border-b">STATUS</th>
                <th className="px-4 py-2 border-b">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {timesheets.map((item) => (
                <tr key={item.weekNo} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{item.weekNo}</td>
                  <td className="px-4 py-2 border-b">{item.dateRange}</td>
                  <td className="px-4 py-2 border-b capitalize">{item.status}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => router.push(`/timesheets/${item.weekNo}`)}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.action}
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
      </main>
    </div>
  );
}
