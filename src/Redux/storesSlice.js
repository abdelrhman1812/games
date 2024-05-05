import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getStores = createAsyncThunk(
  "gameStore/getStores",
  async function () {
    let baseUrl = "https://api.rawg.io/api/stores";
    try {
      const { data } = await axios.get(
        `${baseUrl}?key=858fa74f1f564d0fb66691b85c3dbc44`
      );
      //   console.log(data);
      return data.results; // Return the fetched data as the payload
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error to be caught by .rejected
    }
  }
);

const storesSlice = createSlice({
  name: "gameStore",
  initialState: {
    storess: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: function (builder) {
    builder
      .addCase(getStores.fulfilled, function (state, action) {
        state.isLoading = false;
        state.isError = false;
        // console.log(`==========`, action.payload);
        state.storess = action.payload; // Access payload using action.payload
      })
      .addCase(getStores.pending, function (state) {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getStores.rejected, function (state) {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default storesSlice.reducer;
