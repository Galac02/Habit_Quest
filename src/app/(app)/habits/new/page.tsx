import { HabitForm } from "@/components/habits/habit-form";

export default function NewHabitPage() {
  return (
    <div className="max-w-xl space-y-4">
      <h2 className="text-2xl font-bold">Create habit</h2>
      <HabitForm />
    </div>
  );
}
