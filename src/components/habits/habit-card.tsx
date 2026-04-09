import { StreakBadge } from "./streak-badge";

interface HabitCardProps {
  title: string;
  description?: string | null;
  streak: number;
}

export function HabitCard({ title, description, streak }: HabitCardProps) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <StreakBadge streak={streak} />
      </div>
      {description ? (
        <p className="text-sm text-neutral-600">{description}</p>
      ) : null}
      <div className="mt-4">
        <button className="rounded-lg border px-3 py-2">Mark done</button>
      </div>
    </div>
  );
}
