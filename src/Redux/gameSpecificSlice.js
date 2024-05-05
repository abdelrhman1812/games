import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSpecificGame = createAsyncThunk(
  'specificGames/"specificGame',
  async function (id) {
    const options = {
      method: "GET",
      url: `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      headers: {
        "X-RapidAPI-Key": "d73fc0f9b2msh2c8a927576ea39cp1987e9jsn7974edf0185f",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const specificGameSlice = createSlice({
  name: "specificGames",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },

  extraReducers: function (bulider) {
    bulider
      .addCase(getSpecificGame.fulfilled, function (state, actions) {
        state.isLoading = false;
        state.isError = false;
        // console.log(actions.payload);
        state.data = actions.payload;
      })
      .addCase(getSpecificGame.pending, function (state) {
        state.isLoading = true;
        state.isError = false;
      })

      .addCase(getSpecificGame.rejected, function (state) {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default specificGameSlice.reducer;
