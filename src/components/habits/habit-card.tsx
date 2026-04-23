"use client";
import { StreakBadge } from "./streak-badge";
import { useState } from "react";
import { Check } from "lucide-react";
import { date } from "zod";
import { isToday } from "@/lib/dates";

interface HabitCardProps {
  id: string;
  title: string;
  description?: string | null;
  isActive: boolean;
  /*streak: number;*/
}

export function HabitCard({
  initialHabits,
}: {
  initialHabits: HabitCardProps[];
}) {
  const [completingId, setCompletingId] = useState<string | null>(null);
  const [habits, setHabits] = useState(initialHabits);

  async function handleMarkDone(habitId: string) {
    setCompletingId(habitId);

    try {
      const res = await fetch(`/api/habits/${habitId}/complete`, {
        method: "POST",
      });

      {
        /*     if (res.ok) {
        console.log("Nice job!");
      }
    */
      }
      if (!res.ok) {
        throw new Error("Failed to mark habit as done");
      }

      setHabits((prev) =>
        prev.map((habit) =>
          habit.id === habitId ? { ...habit, isActive: false } : habit,
        ),
      );

      // Optional: remove after animation delay
      setTimeout(() => {
        setHabits((prev) => prev.filter((habit) => habit.id !== habitId));
      }, 700);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setCompletingId(null);
      }, 700);
    }
  }

  return (
    <div className="grid gap-4">
      {habits.map((habit) => {
        const isCompleting = completingId === habit.id;
        const isInactive = !habit.isActive;

        return (
          <div
            key={habit.id}
            className={[
              "flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500",
              isInactive ? "opacity-50 grayscale" : "opacity-100",
            ].join(" ")}
          >
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-semibold">{habit.title}</h2>
              <p className="mt-1 max-w-[80%] text-sm text-neutral-400 wrap-break-word">
                {habit.description ?? "No description"}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => handleMarkDone(habit.id)}
                disabled={isCompleting || isInactive}
                className={[
                  "cursor-pointer relative flex h-12 w-32 items-center justify-center overflow-hidden rounded-lg border text-sm font-medium transition-all",
                  isCompleting || isInactive
                    ? "border-green-500 bg-green-500 text-white duration-500"
                    : "border-gray-500 text-white hover:ring-2 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute inset-y-0 left-0 bg-green-500 transition-all duration-500",
                    isCompleting ? "w-full" : "w-0",
                  ].join(" ")}
                />

                <span className="relative z-10 flex items-center justify-center">
                  {isCompleting || isInactive ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    "Mark as Done"
                  )}
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  /*<div className="flex rounded-2xl border p-4 shadow-sm">
    <div className="flex-1">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
               <StreakBadge streak={streak} />
  </div>
      {description ? (
        <p className="text-sm text-neutral-500">{description}</p>
      ) : null}
    </div>
    <div className="shrink-0 mt-1">
      <button
        className="rounded-lg border px-2 py-2 w-32 h-12 hover:ring-2 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        onClick={() => handleMarkDone(id)}
      >Mark as Done</button>
    </div>
  </div>
</div>
);*/
}
