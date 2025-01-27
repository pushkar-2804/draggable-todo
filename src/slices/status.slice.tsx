import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../types/index.types";

interface StatusesState {
  statuses: Status[];
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
    addStatus: (state, action: PayloadAction<Status>) => {
      state.statuses.push(action.payload);
    },
  },
});

export const { addStatus } = statusesSlice.actions;
export default statusesSlice.reducer;
