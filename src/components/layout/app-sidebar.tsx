import Link from "next/link";

const links = [
  { href: "/today", label: "Today" },
  { href: "/habits", label: "Habits" },
  { href: "/calendar", label: "Calendar" },
  { href: "/tasks", label: "Tasks" },
];

export function AppSidebar() {
  return (
    <aside className="border-r p-4">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Habit Quest</h1>
        <p className="text-sm text-neutral-500">Build your streaks</p>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 hover:bg-neutral-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
