import { NextRequest, NextResponse } from "next/server";
import { weekDetails } from "@/mocks/timesheets";

type Context = {
  params: {
    weekNo?: string;
  };
};

export async function GET(_req: NextRequest, { params }: Context) {
  const weekNo = Number(params.weekNo);
  const data = weekDetails[weekNo];

  if (!data) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}
