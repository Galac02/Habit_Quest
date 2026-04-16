//import { db } from "@/db";
//import { habits } from "@/db/schema/habits";
import { HabitCard } from "@/components/habits/habit-card";
import Link from "next/link";

async function getHabits() {
  const res = await fetch("http://localhost:3000/api/habits", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch habits to display");
  }

  return res.json();
}

export default async function HabitsPage() {
  const habits = await getHabits();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Habits</h2>
          <p className="text-neutral-600">Your long-term habit system.</p>
        </div>
        <Link
          href="/habits/new"
          className="rounded-lg border px-3 py-2 hover:ring-2 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          New habit
        </Link>
      </div>
      {habits.length === 0 ? (
        <div className="rounded-2xl border p-4">No habits yet.</div>
      ) : (
        <div>
          <HabitCard initialHabits={habits} />
        </div>
      )}
      {/*
          <div className="grid gap-4">
          {habits.map((habit: any) => (
            <div key={habit.id}>
              
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{habit.title}</h2>
                <p className="text-sm text-neutral-500">
                  {habit.description ?? "No description"}
                </p>
              </div>
              */}
      {/*
              <div className="shrink-0">
                <button
                  className="rounded-lg border px-2 py-2 w-32 h-12 hover:ring-2 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                  Mark as Done
                </button>
              </div>
              */}
      {/*
              <p className="mt-2 text-sm">
                Active: {habit.isActive ? "Yes" : "No"}
              </p>
              
            </div>
          ))}
        </div>
      )}
      */}
    </div>
  );
}
