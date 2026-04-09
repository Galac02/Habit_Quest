export function StreakBadge({ streak }: { streak: number }) {
  return (
    <span className="inline-flex rounded-full border px-2 py-1 text-sm">
      🔥 {streak}
    </span>
  );
}
