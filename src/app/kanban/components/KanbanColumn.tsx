import KanbanCard from "./KanbanCard";

export default function KanbanColumn({
  title,
  tasks,
}: {
  title: string;
  tasks: string[];
}) {
  return (
    <div className="w-80 bg-gray-100 p-4 rounded-md space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="space-y-2">
        {tasks.map((task, idx) => (
          <KanbanCard key={idx} task={task} />
        ))}
      </div>
    </div>
  );
}
