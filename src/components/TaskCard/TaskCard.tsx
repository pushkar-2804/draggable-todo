import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { Task } from "../../types/index.types";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      style={{ marginBottom: "8px", cursor: "pointer" }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
