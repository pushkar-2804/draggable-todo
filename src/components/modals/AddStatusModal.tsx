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
import { addStatus } from "../../slices/status.slice";

interface AddStatusModalProps {
  currentStatusId: string;
  open: boolean;
  onClose: () => void;
}

export const AddStatusModal: React.FC<AddStatusModalProps> = ({
  currentStatusId,
  open,
  onClose,
}) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleAddStatus = () => {
    if (!status.trim()) {
      setError("Status cannot be empty");
      return;
    }
    const newStatus = {
      id: generateId(),
      name: status,
    };
    dispatch(addStatus({ newStatus, currentStatusId }));
    onClose();
    setStatus("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Status</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          label="Status"
          fullWidth
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          error={!!error}
          helperText={error}
          sx={{ mt: "0.5rem" }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} size="small">
          Cancel
        </Button>
        <Button
          onClick={handleAddStatus}
          color="primary"
          variant="contained"
          size="small"
        >
          Add Task
        </Button>
      </DialogActions>
    </Dialog>
  );
};
