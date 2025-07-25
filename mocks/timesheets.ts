import { WeeklyTimesheet, DayTask } from "@/types/timesheet";

// Weekly summaries
export const weeklyTimesheets: WeeklyTimesheet[] = [
  { weekNo: 1, dateRange: "1-5 January, 2024", status: "completed", action: "view" },
  { weekNo: 2, dateRange: "8-12 January, 2024", status: "incomplete", action: "update" },
  { weekNo: 3, dateRange: "15-19 January, 2024", status: "missing", action: "create" },
];

// Day-wise tasks for each week
export const weekDetails: Record<number, DayTask[]> = {
  1: [
    { date: "1st Jan", task: "Home Page Development", project: "ABC Project" },
    { date: "2nd Jan", task: "API Integration", project: "XYZ Project" },
    { date: "3rd Jan", task: "UI Fixes", project: "ABC Project" },
  ],
  2: [
    { date: "8th Jan", task: "Authentication Module", project: "Finance App" },
  ],
};
