export default function TodayPage() {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Today</h2>
        <p className="text-neutral-600">
          Due habits, open tasks, and quick wins.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border p-4">Due habits will go here</div>
        <div className="rounded-2xl border p-4">Completed habits will go here</div>
        <div className="rounded-2xl border p-4">Open tasks will go here</div>
      </section>
    </div>
  );
}
