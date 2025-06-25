export default function KanbanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted p-6">
      <header className="text-xl font-semibold mb-6">My Kanban</header>
      <main>{children}</main>
    </div>
  );
}
