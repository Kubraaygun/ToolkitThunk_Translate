import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  languages: [],
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: () => {},
});

export default translateSlice.reducer;
