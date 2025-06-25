import KanbanColumn from "./KanbanColumn";

export default function KanbanBoard() {
  const columns = {
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 3"],
    done: ["Task 4"],
  };

  return (
    <div className="flex justify-center gap-4 overflow-auto p-6">
      <KanbanColumn title="To Do" tasks={columns.todo} />
      <KanbanColumn title="In Progress" tasks={columns.inProgress} />
      <KanbanColumn title="Done" tasks={columns.done} />
    </div>
  );
}
