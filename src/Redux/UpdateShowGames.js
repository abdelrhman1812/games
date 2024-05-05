import { createSlice } from "@reduxjs/toolkit";

const showGameSlice = createSlice({
  name: "update",
  initialState: {
    start: 0,
    end: 12,
    // gamesLength: null,
  },
  reducers: {
    increment: function (state, actions) {
      console.log(actions.payload.payload);
      let step = 12;

      if (actions.payload.payload.nameFunction === "increase") {
        if (state.end > actions.payload.payload.game) {
          return;
        } else {
          state.start += step;
          state.end += step;
        }
      } else if (state.start >= step) {
        state.start -= step;
        state.end -= step;
      } else {
        return;
      }
    },
  },
});

export default showGameSlice.reducer;

export const { increment } = showGameSlice.actions;
