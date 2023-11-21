import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "modal",
  initialState: false,
  reducers: {
    abrir: () => true,
    fechar: () => false,
  },
});

export default slice.reducer;
export const { abrir, fechar } = slice.actions;
