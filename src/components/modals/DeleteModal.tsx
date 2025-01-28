import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { deleteTask } from "../../slices/task.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

interface DeleteTaskModalProps {
  taskId: string;
  open: boolean;
  onClose: () => void;
}
export const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  taskId,
  onClose,
  open,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = () => {
    if (taskId) {
      dispatch(deleteTask(taskId));
      navigate("/");
    }
  };
  return (
    <Dialog open={open} onClose={onClose} sx={{ padding: "20px" }}>
      <DialogTitle> Delete task</DialogTitle>
      <DialogContent>
        <Typography> Are you sure you want to delete</Typography>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose} size="small">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          size="small"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
