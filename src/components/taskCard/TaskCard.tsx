import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Task } from "../../types/index.types";

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = () => {
    navigate(`/task/${task.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      style={{ cursor: "pointer", margin: "0.5rem 0" }}
    >
      <CardContent>
        <Typography
          variant={isSmallScreen ? "subtitle1" : "h6"}
          sx={{ fontWeight: "bold" }}
        >
          {task.title}
        </Typography>
        <Typography
          variant={isSmallScreen ? "body2" : "body1"}
          color="textSecondary"
          sx={{ marginTop: "0.25rem" }}
        >
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
