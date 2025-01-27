import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { generateId } from "../../utils/task.utils";
import { addTask } from "../../slices/task.slice";

interface AddTaskModalProps {
  statusId: string;
  open: boolean;
  onClose: () => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  statusId,
  open,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: generateId(),
      title,
      description,
      status: statusId,
    };
    dispatch(addTask(newTask));
    onClose();
    setTitle("");
    setDescription("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddTask} color="primary">
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};
