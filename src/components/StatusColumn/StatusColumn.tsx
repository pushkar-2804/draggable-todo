import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Task, Status } from "../../types/index.types";
import { TaskCard } from "../taskCard/TaskCard";
import { Box, Typography } from "@mui/material";
import { AddTaskButton } from "../buttons/AddTaskButton";
import { AddStatusButton } from "../buttons/AddStatusButton";

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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="8px"
          >
            <Typography variant="h6">
              {status.name} ({tasks.length})
            </Typography>
            <AddStatusButton statusId={status.id} />
          </Box>
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
