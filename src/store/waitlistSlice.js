import { createSlice } from "@reduxjs/toolkit";

const waitlistSlice = createSlice({
  name: "waitlist",
  initialState: {
    submitted: false,
  },
  reducers: {
    setSubmitted: (state) => {
      state.submitted = true;
    },
  },
});

export const { setSubmitted } = waitlistSlice.actions;
export default waitlistSlice.reducer;
