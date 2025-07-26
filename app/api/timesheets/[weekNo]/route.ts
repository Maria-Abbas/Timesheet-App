// import { NextRequest, NextResponse } from "next/server";
// import { weekDetails } from "@/mocks/timesheets";

// export async function GET(
//   _req: NextRequest,
//   { params }: { params: { weekNo: string } }
// ) {
//   const weekNo = Number(params.weekNo);
//   const data = weekDetails[weekNo];

//   if (!data) {
//     return NextResponse.json({ message: "Not found" }, { status: 404 });
//   }

//   return NextResponse.json(data);
// }

import { NextRequest, NextResponse } from "next/server";
import { weekDetails } from "@/mocks/timesheets";

interface RequestContext {
  params: { weekNo: string };
}

export async function GET(
  _req: NextRequest,
  context: RequestContext
) {
  const weekNo = Number(context.params.weekNo);
  const data = weekDetails[weekNo];

  if (!data) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}