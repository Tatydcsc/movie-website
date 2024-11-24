import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    {
      id: 1,
      title: "Usuario 1",
      content: "Detalhes do usuario 1",
      expanded: false,
    },
    {
      id: 2,
      title: "Usuario 2",
      content: "Detalhes do usuario 2",
      expanded: false,
    },
  ],
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleRow: (state, action) => {
      const row = state.rows.find((row) => row.id === action.payload);
      if (row) row.expanded = !row.expanded;
    },
  },
});

export const { toggleRow } = AuthSlice.actions;
export default AuthSlice.reducer;
