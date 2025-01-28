import { Button } from "@mui/material";
import { useState } from "react";
import { DeleteTaskModal } from "../modals/DeleteModal";

export const DeleteTaskButton = ({ taskId }: { taskId: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="error" onClick={handleOpen}>
        Delete
      </Button>
      <DeleteTaskModal taskId={taskId} open={open} onClose={handleClose} />
    </>
  );
};
