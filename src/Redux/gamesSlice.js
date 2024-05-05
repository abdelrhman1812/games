import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGames = createAsyncThunk('game/"fetchGames', async function () {
  const options = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "d73fc0f9b2msh2c8a927576ea39cp1987e9jsn7974edf0185f",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const gameSlice = createSlice({
  name: "game",
  initialState: {
    games: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: function (bulider) {
    //Susses
    bulider
      .addCase(getGames.fulfilled, function (state, actions) {
        state.isLoading = false;
        state.isError = false;
        state.games = actions.payload;
        // console.log(actions.payload);
      })

      //Loading
      .addCase(getGames.pending, function (state, actions) {
        state.isLoading = true;
        state.isError = false;
      })
      //Error
      .addCase(getGames.rejected, function (state, actions) {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default gameSlice.reducer;
