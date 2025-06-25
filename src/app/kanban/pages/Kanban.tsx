import KanbanBoard from "../components/KanbanBoard";

export default function KanbanPage() {
  return (
    <main className="min-h-screen bg-muted">
      <h1 className="text-2xl font-bold text-center p-6">Kanban Board</h1>
      <KanbanBoard />
    </main>
  );
}
