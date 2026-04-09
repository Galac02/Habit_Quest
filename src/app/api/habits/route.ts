import { NextRequest, NextResponse } from "next/server";
import { createHabitSchema } from "@/features/habits/habits.validation";
import { HabitsService } from "@/features/habits/habits.service";

const MOCK_USER_ID = "1f3bc7b9-cbe1-4428-9ce4-bcaaa25ba11b";

export async function GET() {
  try {
    //const habits = await HabitsService.listByUser(MOCK_USER_ID);
    const allHabits = await HabitsService.listAll();
    return NextResponse.json(allHabits);
  } catch (error) {
    console.error("Failed to fetch habits:", error);

    return NextResponse.json(
      { error: "Failed to fetch habits" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const json = await req.json();
  const parsed = createHabitSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const habit = await HabitsService.create(MOCK_USER_ID, parsed.data);
  return NextResponse.json(habit, { status: 201 });
}
