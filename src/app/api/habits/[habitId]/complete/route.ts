import { NextResponse } from "next/server";
import { db } from "@/db";
import { habits } from "@/db/schema/habits";
import { eq } from "drizzle-orm";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ habitId: string }> },
) {
  const { habitId } = await params;

  const [updatedHabit] = await db
    .update(habits)
    .set({
      isActive: false,
    })
    .where(eq(habits.id, habitId))
    .returning();

  return NextResponse.json(updatedHabit);
}
