import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSpecificCreator = createAsyncThunk(
  "specificCreators/getSpecificCreators",
  async function (id) {
    let baseUrl = `https://api.rawg.io/api/creators/${id}`;
    try {
      const { data } = await axios.get(
        `${baseUrl}?key=858fa74f1f564d0fb66691b85c3dbc44`
      );
      //   console.log(data);
      return data; // Return the fetched data as the payload
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error to be caught by .rejected
    }
  }
);

const creatorSpecificSlice = createSlice({
  name: "specificStory",
  initialState: {
    creatorSpecific: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: function (builder) {
    builder
      .addCase(getSpecificCreator.fulfilled, function (state, action) {
        state.isLoading = false;
        state.isError = false;
        // console.log(`==========`, action.payload);
        state.creatorSpecific = action.payload; // Access payload using action.payload
      })
      .addCase(getSpecificCreator.pending, function (state) {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSpecificCreator.rejected, function (state) {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default creatorSpecificSlice.reducer;
