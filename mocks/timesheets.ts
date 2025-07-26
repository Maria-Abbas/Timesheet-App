import { WeeklyTimesheet, DayTask } from "@/types/timesheet";


export const weeklyTimesheets: WeeklyTimesheet[] = [
  { weekNo: 1, dateRange: "1-5 January, 2024", hours: 40, status: "completed", action: "view" },
  { weekNo: 2, dateRange: "8-12 January, 2024", hours: 40, status: "completed", action: "view" },
  { weekNo: 3, dateRange: "15-19 January, 2024", hours: 20, status: "incomplete", action: "update" },
  { weekNo: 4, dateRange: "22-26 January, 2024", hours: 40, status: "completed", action: "view" },
  { weekNo: 5, dateRange: "28 January - 1 February, 2024", hours: 0, status: "missing", action: "create" },
];


export const weekDetails: Record<number, DayTask[]> = {
  1: [
    {
      date: "1st Jan",
      tasks: [
        { task: "Home Page Development", project: "ABC Project", hours: 8 },
        { task: "Requirement Gathering", project: "ABC Project", hours: 2 },
      ],
    },
    {
      date: "2nd Jan",
      tasks: [
        { task: "API Integration", project: "XYZ Project", hours: 6 },
        { task: "API Testing", project: "XYZ Project", hours: 2 },
      ],
    },
    {
      date: "3rd Jan",
      tasks: [{ task: "UI Fixes", project: "ABC Project", hours: 8 }],
    },
    {
      date: "4th Jan",
      tasks: [{ task: "Client Meeting", project: "ABC Project", hours: 6 }],
    },
    {
      date: "5th Jan",
      tasks: [{ task: "Documentation", project: "ABC Project", hours: 8 }],
    },
  ],
  2: [
    {
      date: "8th Jan",
      tasks: [{ task: "Authentication Module", project: "Finance App", hours: 8 }],
    },
    {
      date: "9th Jan",
      tasks: [{ task: "Code Review", project: "Finance App", hours: 8 }],
    },
    {
      date: "10th Jan",
      tasks: [{ task: "Bug Fixes", project: "Finance App", hours: 8 }],
    },
    {
      date: "11th Jan",
      tasks: [{ task: "Performance Optimization", project: "Finance App", hours: 8 }],
    },
    {
      date: "12th Jan",
      tasks: [{ task: "Team Meeting", project: "Finance App", hours: 8 }],
    },
  ],
  3: [
    {
      date: "15th Jan",
      tasks: [
        { task: "New Feature Development", project: "Retail App", hours: 6 },
        { task: "Bug Fixing", project: "Retail App", hours: 2 },
      ],
    },
    { date: "16th Jan", tasks: [{ task: "API Integration", project: "Retail App", hours: 6 }] },
    { date: "17th Jan", tasks: [{ task: "UI Improvements", project: "Retail App", hours: 4 }] },
    { date: "18th Jan", tasks: [{ task: "Testing", project: "Retail App", hours: 2 }] },
    { date: "19th Jan", tasks: [{ task: "Documentation", project: "Retail App", hours: 0 }] },
  ],
  4: [
    {
      date: "22nd Jan",
      tasks: [
        { task: "Database Migration", project: "E-Commerce", hours: 7 },
        { task: "Backup Verification", project: "E-Commerce", hours: 1 },
      ],
    },
    { date: "23rd Jan", tasks: [{ task: "API Maintenance", project: "E-Commerce", hours: 8 }] },
    { date: "24th Jan", tasks: [{ task: "Bug Fixes", project: "E-Commerce", hours: 7 }] },
    { date: "25th Jan", tasks: [{ task: "Testing", project: "E-Commerce", hours: 8 }] },
    { date: "26th Jan", tasks: [{ task: "Release Prep", project: "E-Commerce", hours: 9 }] },
  ],
  5: [
    {
      date: "28th Jan",
      tasks: [],
    },
    { date: "29th Jan", tasks: [] },
    { date: "30th Jan", tasks: [] },
    { date: "31st Jan", tasks: [] },
    { date: "1st Feb", tasks: [] },
  ],
};
