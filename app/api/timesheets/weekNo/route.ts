import { NextRequest, NextResponse } from "next/server";
import { weekDetails } from "@/mocks/timesheets";

export async function GET(
  _req: NextRequest,
  context: { params: Record<string, string> }
) {
  const weekNo = Number(context.params.weekNo);
  const data = weekDetails[weekNo];

  if (!data) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
