"use client";

import { useState } from "react";

type PeriodType = "day" | "week";

export function HabitForm() {
  const [title, setTitle] = useState("");
  const [difficulty, setDiff] = useState<number>();
  const [description, setDesc] = useState("");
  const [icon, setIcon] = useState("🔥");
  const [color, setColor] = useState("");

  const [timesPerPeriod, setTimesPerPeriod] = useState<number>(1);
  const [periodType, setPeriodType] = useState<PeriodType>("day");

  async function handleSubmit(e: React.FormEvent) {
    //alert(`Habit title: ${title}, Difficulty: ${difficulty}, Color: ${color}, Icon: ${icon}, Description: ${description}`);
    e.preventDefault();

    await fetch("/api/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        difficulty,
        allowEarlyCompletion: true,
        description,
        color: 0xa2a2a2,
        icon,
        rule: {
          timesPerPeriod,
          periodType,
          startDate: new Date().toISOString(),
        },
      }),
    });

    setTitle("");
    setDiff(1);
    setDesc("");
    setIcon("🔥");
    setTimesPerPeriod(1);
    setPeriodType("day");
  }

  return (
    <form onSubmit={handleSubmit} className="w-5xl space-y-4 rounded-2xl border p-4">
      <div>
        {/* Habit title */}
        <label className="mb-1 block font-stretch-100% font-bold">Habit title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="e.g. Read for 10 minutes"
        />
        <br />
        <br />

        {/* Habit difficulty */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-1 block font-stretch-100% font-bold">Difficulty</label>
            <label className="cursor-pointer">
              <input
                type="radio"
                name="difficulty"
                value={1}
                checked={difficulty === 1}
                onChange={(e) => setDiff(Number(e.target.value))}
                className="peer hidden"
              />
              <div className="
                flex h-16 items-center justify-center rounded-lg 
                border border-white
                text-white
                mb-3

                transition-all
                peer-checked:border-2
                peer-checked:border-white
                peer-checked:ring-2
                peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              > Easy
              </div>
            </label>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="difficulty"
                value={2}
                checked={difficulty === 2}
                onChange={(e) => setDiff(Number(e.target.value))}
                className="peer hidden"
              />
              <div className="
                flex h-16 items-center justify-center rounded-lg
                border border-white
                text-white
                mb-3

                transition-all
                peer-checked:border-2
                peer-checked:border-white
                peer-checked:ring-2
                peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              > Medium
              </div>
            </label>

            <label className="cursor-pointer">
              <input
                type="radio"
                name="difficulty"
                value={3}
                checked={difficulty === 3}
                onChange={(e) => setDiff(Number(e.target.value))}
                className="peer hidden"
              />
              <div className="
                flex h-16 items-center justify-center rounded-lg
                border border-white
                text-white
                mb-3

                transition-all
                peer-checked:border-2
                peer-checked:border-white
                peer-checked:ring-2
                peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
              > Hard
              </div>
            </label>
          </div>

          {/*Habit rules */}
          <div>
            <label className="mb-1 block font-bold">Repeat</label>

            <div className="flex items-center gap-3">
              <span className="text-sm">Every</span>

              <input
                type="number"
                min={1}
                value={timesPerPeriod}
                onChange={(e) => setTimesPerPeriod(Number(e.target.value))}
                className="w-24 rounded-lg border px-3 py-2" />

              <select
                value={periodType}
                onChange={(e) => setPeriodType(e.target.value as PeriodType)}
                className="rounded-lg border px-3 py-2">

                <option value="day" className="text-black">
                  {timesPerPeriod === 1 ? "day" : "days"}
                </option>
                <option value="week" className="text-black">
                  {timesPerPeriod === 1 ? "week" : "weeks"}
                </option>
                <option value="month" className="text-black">
                  {timesPerPeriod === 1 ? "month" : "months"}
                </option>
              </select>
            </div>

            <p className="mt-2 text-sm text-neutral-400">
              Current rule: every {timesPerPeriod}{" "}
              {periodType === "day"
                ? timesPerPeriod === 1
                  ? "day"
                  : "days"
                : timesPerPeriod === 1
                  ? "week"
                  : "weeks"}
            </p>
          </div>

          {/*Habit color (for calendar)
          TO-DO
          <div className="grid gap-4">
            <label className="mb-1 block font-stretch-100% font-bold">Color</label>
            <div className="flex flex-row">
              <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
                className="h-12 w-full rounded-lg border border-white bg-transparent p-1"
              />
            </div>
          */}
          {/*Habit icon (for calendar)
          TO-DO
            <div>
              <label className="mb-1 block font-stretch-100% font-bold">Icon</label>
              <div className="grid grid-cols-5 gap-2">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value={"💪"}
                    checked={icon === '💪'}
                    onChange={(e) => setIcon(e.target.value)}
                    className="peer hidden"
                  />
                  <div className="
                  flex h-12 items-center justify-center rounded-lg
                  border border-white
                  text-white

                  transition-all
                  peer-checked:border-2
                  peer-checked:border-white
                  peer-checked:ring-2
                  peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  >💪
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value={"📚"}
                    checked={icon === '📚'}
                    onChange={(e) => setIcon(e.target.value)}
                    className="peer hidden"
                  />
                  <div className="
                  flex h-12 items-center justify-center rounded-lg
                  border border-white
                  text-white

                  transition-all
                  peer-checked:border-2
                  peer-checked:border-white
                  peer-checked:ring-2
                  peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  >📚
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value={"🧘"}
                    checked={icon === '🧘'}
                    onChange={(e) => setIcon(e.target.value)}
                    className="peer hidden"
                  />
                  <div className="
                  flex h-12 items-center justify-center rounded-lg
                  border border-white
                  text-white

                  transition-all
                  peer-checked:border-2
                  peer-checked:border-white
                  peer-checked:ring-2
                  peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  >🧘
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value={"💧"}
                    checked={icon === '💧'}
                    onChange={(e) => setIcon(e.target.value)}
                    className="peer hidden"
                  />
                  <div className="
                  flex h-12 items-center justify-center rounded-lg
                  border border-white
                  text-white

                  transition-all
                  peer-checked:border-2
                  peer-checked:border-white
                  peer-checked:ring-2
                  peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  >💧
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="icon"
                    value={"🔥"}
                    checked={icon === '🔥'}
                    onChange={(e) => setIcon(e.target.value)}
                    className="peer hidden"
                  />
                  <div className="
                  flex h-12 items-center justify-center rounded-lg
                  border border-white
                  text-white

                  transition-all
                  peer-checked:border-2
                  peer-checked:border-white
                  peer-checked:ring-2
                  peer-checked:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                  >🔥
                  </div>
                </label>
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Habit Description */}
        <label className="mb-1 block font-stretch-100% font-bold">Description</label>
        <textarea
          value={description}
          className="w-full rounded-lg border px-3 py-2"
          placeholder="Describe in detail what you want to accomplish (helps with motivation)."
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>

      {/* Submit */}
      <button type="submit" className="rounded-lg border px-3 py-2 w-full cursor-pointer hover:ring-2 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]">
        Save habit
      </button>
    </form>
  );
}
