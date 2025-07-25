export interface WeeklyTimesheet {
  weekNo: number;
  dateRange: string; // e.g., "1-5 January, 2024"
  status: "completed" | "incomplete" | "missing";
  action: "view" | "update" | "create"; // derived from status
}

export interface DayTask {
  date: string;    // e.g., "1st Jan"
  task: string;    // e.g., "Home Page Development"
  project: string; // e.g., "ABC Project"
}
