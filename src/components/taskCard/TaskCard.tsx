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
      style={{ cursor: "pointer", margin: "0.5rem 0" }}
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
