import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  Button,
  TextField,
  Typography,
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { deleteTask, updateTask } from "../slices/task.slice";
import { DeleteTaskButton } from "../components/buttons/DeleteTaskButton";

export const TaskPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const statuses = useSelector((state: RootState) => state.statuses.statuses);
  const task = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );
  const dispatch = useDispatch();

  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [status, setStatus] = useState(task?.status || "");
  const [error, setError] = useState<string | null>(null);

  const handleSave = () => {
    if (!title.trim()) {
      setError("Title cannot be empty");
      return;
    }
    if (task) {
      dispatch(updateTask({ ...task, title, description, status }));
      navigate("/");
    }
  };

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!task) {
    return (
      <Box
        role="alert"
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "primary.main", mt: 2 }}>
          No tasks found
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
          <Button variant="outlined" onClick={handleBack}>
            PREVIOUS PAGE
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Container>
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Edit Task
        </Typography>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          error={!!error}
          helperText={error}
        />
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Status</InputLabel>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
            label="Status"
          >
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.id}>
                {status.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ marginTop: 2, display: "flex", gap: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <DeleteTaskButton taskId={task.id} />
        </Box>
      </Box>
    </Container>
  );
};
