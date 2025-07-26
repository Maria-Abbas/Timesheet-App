import { NextRequest, NextResponse } from "next/server";
import { weekDetails } from "@/mocks/timesheets";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ weekNo: string }> } //params is now a Promise
) {
  const { weekNo } = await params;
  const weekNumber = Number(weekNo);
  const data = weekDetails[weekNumber];

  if (!data) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}