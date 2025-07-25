export interface WeeklyTimesheet {
  weekNo: number;
  dateRange: string;
  hours: number;
  status: "completed" | "incomplete" | "missing";
  action: "view" | "update" | "create";
}

export interface Task {
  task: string;
  project: string;
  hours: number;
}

export interface DayTask {
  date: string;     
  tasks: Task[]; 
}
