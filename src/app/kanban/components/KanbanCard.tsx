import { Card } from "@/components/ui/card";

export default function KanbanCard({ task }: { task: string }) {
  return (
    <Card className="p-4 bg-white shadow-sm border rounded-md cursor-grab">
      {task}
    </Card>
  );
}
