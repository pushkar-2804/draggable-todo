import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Task, Status } from "../../types/index.types";
import { TaskCard } from "../taskCard/TaskCard";
import { Typography } from "@mui/material";
import { AddTaskButton } from "../buttons/AddTaskButton";

interface StatusColumnProps {
  status: Status;
  tasks: Task[];
}

export const StatusColumn: React.FC<StatusColumnProps> = ({
  status,
  tasks,
}) => {
  return (
    <Droppable droppableId={status.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            flex: 1,
            margin: "8px",
            padding: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="h6" style={{ marginBottom: "8px" }}>
            {status.name} ({tasks.length})
          </Typography>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskCard task={task} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          <AddTaskButton statusId={status.id} />
        </div>
      )}
    </Droppable>
  );
};
