import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../types/index.types";

interface StatusesState {
  statuses: Status[];
}

interface AddStatusPayload {
  newStatus: Status;
  currentStatusId: string;
}

const initialState: StatusesState = {
  statuses: [
    { id: "1", name: "Not Started" },
    { id: "2", name: "In Progress" },
    { id: "3", name: "Completed" },
  ],
};

const statusesSlice = createSlice({
  name: "statuses",
  initialState,
  reducers: {
    addStatus: (state, action: PayloadAction<AddStatusPayload>) => {
      const { newStatus, currentStatusId } = action.payload;

      // Find the index of the current status
      const currentIndex = state.statuses.findIndex(
        (status) => status.id === currentStatusId
      );

      // If found, insert the new status immediately after it
      if (currentIndex !== -1) {
        state.statuses.splice(currentIndex + 1, 0, newStatus);
      } else {
        // If not found, add it to the end as a fallback
        state.statuses.push(newStatus);
      }
    },
  },
});

export const { addStatus } = statusesSlice.actions;
export default statusesSlice.reducer;
