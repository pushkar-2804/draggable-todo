import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Task, Status } from "../../types/index.types";
import { TaskCard } from "../taskCard/TaskCard";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Droppable droppableId={status.id}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={{
            flex: 1,
            margin: isSmallScreen ? "0.5rem" : "1rem",
            padding: isSmallScreen ? "0.5rem" : "1rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#f9f9f9",
            minWidth: isSmallScreen ? "80vw" : "auto",
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="0.5rem"
          >
            <Typography variant="h6">
              {status.name} ({tasks.length})
            </Typography>
            <AddStatusButton statusId={status.id} />
          </Box>
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  sx={{ marginBottom: "0.5rem" }}
                >
                  <TaskCard task={task} />
                </Box>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
          <Box sx={{ marginTop: "0.5rem" }}>
            <AddTaskButton statusId={status.id} />
          </Box>
        </Box>
      )}
    </Droppable>
  );
};
