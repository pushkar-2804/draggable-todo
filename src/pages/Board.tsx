import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { updateTask } from "../slices/task.slice";
import { StatusColumn } from "../components/statusColumn/StatusColumn";

export const Board = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const statuses = useSelector((state: RootState) => state.statuses.statuses);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId;
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      dispatch(updateTask({ ...task, status: newStatus }));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "16px",
          paddingBottom: "40px",
        }}
      >
        {statuses.map((status) => (
          <StatusColumn
            key={status.id}
            status={status}
            tasks={tasks.filter((task) => task.status === status.id)}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
