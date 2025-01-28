import { IconButton } from "@mui/material";
import { useState } from "react";
import { AddStatusModal } from "../modals/AddStatusModal";
import AddIcon from "@mui/icons-material/Add";

export const AddStatusButton = ({ statusId }: { statusId: string }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        color="primary"
        aria-label="add-task"
        size="small"
        onClick={handleOpen}
      >
        <AddIcon fontSize="small" />
      </IconButton>
      <AddStatusModal
        currentStatusId={statusId}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};
