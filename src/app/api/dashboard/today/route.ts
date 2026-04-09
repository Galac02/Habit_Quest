import { NextResponse } from "next/server";
import { DashboardService } from "@/features/dashboard/dashboard.service";

const MOCK_USER_ID = "00000000-0000-0000-0000-000000000001";

export async function GET() {
  const data = await DashboardService.getToday(MOCK_USER_ID);
  return NextResponse.json(data);
}
