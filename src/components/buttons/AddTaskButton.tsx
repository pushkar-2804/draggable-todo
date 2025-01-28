import { Button } from "@mui/material";
import { AddTaskModal } from "../modals/AddTaskModal";
import { useState } from "react";

export const AddTaskButton = ({ statusId }: { statusId: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        style={{ marginTop: "16px" }}
        size="small"
      >
        + New
      </Button>
      <AddTaskModal statusId={statusId} open={open} onClose={handleClose} />
    </>
  );
};
