import { NextResponse } from "next/server";
import { weeklyTimesheets } from "@/mocks/timesheets";

export async function GET() {
  return NextResponse.json(weeklyTimesheets);
}
