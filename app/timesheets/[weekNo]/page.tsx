// "use client";

// import { useParams, useSearchParams } from "next/navigation";
// import { weeklyTimesheets, weekDetails } from "../../../mocks/timesheets";
// import Header from "@/components/Header";
// import { useMemo } from "react";
// import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

// export default function TimesheetDetailsPage() {
//   const { weekNo } = useParams();
//   const searchParams = useSearchParams();
//   const action = searchParams.get("action") || "view";

//   const weekNumber = Number(weekNo);
//   const weekData = useMemo(
//     () => weeklyTimesheets.find((w) => w.weekNo === weekNumber),
//     [weekNumber]
//   );
//   const tasks = weekDetails[weekNumber] || [];

//   if (!weekData) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex flex-col">
//         <Header />
//         <div className="flex-1 flex items-center justify-center text-gray-600 text-lg">
//           No timesheet found.
//         </div>
//       </div>
//     );
//   }

//   const progress = Math.min((weekData.hours / 40) * 100, 100);

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <Header />

//       <main className="flex-1 p-6 flex justify-center">
//         <div className="bg-white w-full max-w-4xl rounded-md shadow p-6 space-y-6">
//           {/* Header Row */}
//           <div className="flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-gray-800">
//               This Week's Timesheet
//             </h2>
//             <span className="text-sm font-medium text-gray-700">
//               {weekData.hours}/40 hours
//             </span>
//           </div>

//           {/* Progress Bar */}
//           <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="h-3 bg-orange-400"
//               style={{ width: `${progress}%` }}
//             />
//           </div>

//           {/* Week Info */}
//           <p className="text-sm text-gray-500 font-medium">
//             {weekData.dateRange} ({action.toUpperCase()} MODE)
//           </p>

//           {/* Task List */}
//           <div className="space-y-6">
//             {tasks.length === 0 && (
//               <p className="text-gray-500 text-sm">
//                 {action === "create"
//                   ? "No tasks yet. Start by adding tasks."
//                   : "No tasks added yet."}
//               </p>
//             )}

//             {tasks.map((dayTask, idx) => (
//               <div
//                 key={idx}
//                 className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-2 items-start"
//               >
//                 {/* Column 1: Date */}
//                 <div className="text-lg font-bold text-black">{dayTask.date}</div>

//                 {/* Column 2: Tasks for this date */}
//                 <div className="space-y-3">
//                   {dayTask.tasks.map((task, tIdx) => (
//                     <div
//                       key={tIdx}
//                       className="border border-gray-300 rounded-md p-4 flex justify-between items-center"
//                     >
//                       {/* Task Title */}
//                       <div className="font-medium text-gray-800">{task.task}</div>

//                       {/* Project, Hours, and Menu */}
//                       <div className="flex items-center gap-4 text-gray-500 text-sm">
//                         <span>{task.project}</span>
//                         <span>{task.hours || "0"}h</span>
//                         {action !== "view" && (
//                           <button className="p-1 hover:text-gray-600 text-gray-400">
//                             <EllipsisHorizontalIcon className="h-5 w-5" />
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   ))}

//                   {(action === "update" || action === "create") && (
//                     <div
//                       className="mt-2 cursor-pointer rounded-lg p-4 flex items-center justify-center text-[#1A56DB]"
//                       style={{
//                         backgroundColor: "#E1EFFE",
//                         border: "2px dotted #1A56DB",
//                       }}
//                     >
//                       + Add new task
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }







"use client";

import { useParams, useSearchParams } from "next/navigation";
import { weeklyTimesheets, weekDetails } from "../../../mocks/timesheets";
import Header from "@/components/Header";
import { useMemo, useState } from "react";
import { EllipsisHorizontalIcon, XMarkIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

type Task = {
  task: string;
  project: string;
  hours: number;
};

type DayTask = {
  date: string;
  tasks: Task[];
};

export default function TimesheetDetailsPage() {
  const { weekNo } = useParams();
  const searchParams = useSearchParams();
  const action = searchParams.get("action") || "view";

  const weekNumber = Number(weekNo);
  const weekData = useMemo(
    () => weeklyTimesheets.find((w) => w.weekNo === weekNumber),
    [weekNumber]
  );
  const tasks = weekDetails[weekNumber] || [];


  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!weekData) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center text-gray-600 text-lg">
          No timesheet found.
        </div>
      </div>
    );
  }

  const progress = Math.min((weekData.hours / 40) * 100, 100);

  
  function openModal() {
    setIsModalOpen(true);
  }
  
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 p-6 flex justify-center">
        <div className="bg-white w-full max-w-4xl rounded-md shadow p-6 space-y-6">
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">This Week's Timesheet</h2>
            <span className="text-sm font-medium text-gray-700">
              {weekData.hours}/40 hours
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-3 bg-orange-400" style={{ width: `${progress}%` }} />
          </div>

          {/* Week Info */}
          <p className="text-sm text-gray-500 font-medium">
            {weekData.dateRange} ({action.toUpperCase()} MODE)
          </p>

          {/* Task List */}
          <div className="space-y-6">
            {tasks.length === 0 && (
              <p className="text-gray-500 text-sm">
                {action === "create" ? "No tasks yet. Start by adding tasks." : "No tasks added yet."}
              </p>
            )}

            {tasks.map((dayTask: DayTask, idx: number) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-2 items-start"
              >
                
                <div className="text-lg font-bold text-black">{dayTask.date}</div>

                
                <div className="space-y-3">
                  {dayTask.tasks.map((task, tIdx) => (
                    <div
                      key={tIdx}
                      className="border border-gray-300 rounded-md p-4 flex justify-between items-center"
                    >
                    
                      <div className="font-medium text-gray-800">{task.task}</div>

                      
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        <span>{task.project}</span>
                        <span>{task.hours || "0"}h</span>
                        {action !== "view" && (
                          <button className="p-1 hover:text-gray-600 text-gray-400">
                            <EllipsisHorizontalIcon className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  {(action === "update" || action === "create") && (
                    <div
                      onClick={openModal}
                      className="mt-2 cursor-pointer rounded-lg p-4 flex items-center justify-center text-[#1A56DB]"
                      style={{
                        backgroundColor: "#E1EFFE",
                        border: "2px dotted #1A56DB",
                      }}
                    >
                      + Add new task
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      
      {isModalOpen && <AddEntryModal onClose={closeModal} />}
    </div>
  );
}

// Modal component
function AddEntryModal({ onClose }: { onClose: () => void }) {
  const projects = ["ABC Project", "XYZ Project", "Finance App", "E-Commerce", "Mobile App"];
  const types = ["Development", "Design", "Testing", "Meeting", "Research"];

  
  const [project, setProject] = useState<string>(projects[0]);
  const [type, setType] = useState<string>(types[0]);
  const [taskDescription, setTaskDescription] = useState("");
  const [hours, setHours] = useState(0);

  
  function incrementHours() {
    setHours((h) => Math.min(12, h + 1));
  }
  function decrementHours() {
    setHours((h) => Math.max(0, h - 1));
  }

  return (
    <>
      
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />


      
      <div className="fixed z-50 top-1/2 left-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-lg">
        
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Add new entry</h3>
          <button
            className="p-1 rounded hover:bg-gray-100"
            onClick={onClose}
            aria-label="Close modal"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            
            alert(
              `Adding entry:\nProject: ${project}\nType: ${type}\nTask: ${taskDescription}\nHours: ${hours}`
            );
            onClose();
          }}
          className="space-y-4"
        >
          
          <label className="block">
            <span className="font-medium text-gray-700 flex items-center gap-1">
              Select project <span className="text-red-500">*</span>
              <TooltipIcon text="Choose the project this task belongs to." />
            </span>
            <select
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            >
              {projects.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>

          
          <label className="block">
            <span className="font-medium text-gray-700 flex items-center gap-1">
              Select type <span className="text-red-500">*</span>
              <TooltipIcon text="Select the type of work for this task." />
            </span>
            <select
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          {/* Task Description */}
          <label className="block">
            <span className="font-medium text-gray-700">Task Description</span>
            <textarea
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe the task"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </label>

          {/* Hours with + and - */}
          <label className="block">
            <span className="font-medium text-gray-700 flex items-center gap-1">
              Hours <span className="text-red-500">*</span>
            </span>
            <div className="mt-1 inline-flex items-center gap-2 border border-gray-300 rounded-md px-3 py-1 select-none">
              <button
                type="button"
                onClick={decrementHours}
                className="text-xl font-bold text-gray-600 hover:text-gray-900"
                aria-label="Decrease hours"
              >
                -
              </button>
              <span className="w-8 text-center font-mono text-gray-700">{hours}</span>
              <button
                type="button"
                onClick={incrementHours}
                className="text-xl font-bold text-gray-600 hover:text-gray-900"
                aria-label="Increase hours"
              >
                +
              </button>
            </div>
          </label>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add entry
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}


function TooltipIcon({ text }: { text: string }) {
  return (
    <div className="relative group inline-block">
      <InformationCircleIcon className="h-4 w-4 text-gray-400 cursor-pointer" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden w-max max-w-xs rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:block z-50 whitespace-normal">
        {text}
      </div>
    </div>
  );
}

