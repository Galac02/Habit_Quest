import { AppSidebar } from "@/components/layout/app-sidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      <AppSidebar />
      <main className="p-6">{children}</main>
    </div>
  );
}
