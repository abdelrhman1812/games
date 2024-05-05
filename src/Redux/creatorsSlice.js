import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCreators = createAsyncThunk(
  "gameCreators/getCreators",
  async function () {
    let baseUrl = "https://api.rawg.io/api/creators";
    try {
      const { data } = await axios.get(
        `${baseUrl}?key=858fa74f1f564d0fb66691b85c3dbc44`
      );
      //   console.log(data);
      return data.results;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
);

const storesSlice = createSlice({
  name: "gameCreators",
  initialState: {
    creator: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: function (builder) {
    builder
      .addCase(getCreators.fulfilled, function (state, action) {
        state.isLoading = false;
        state.isError = false;
        // console.log(`==========`, action.payload);
        state.creator = action.payload; // Access payload using action.payload
      })
      .addCase(getCreators.pending, function (state) {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCreators.rejected, function (state) {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default storesSlice.reducer;
