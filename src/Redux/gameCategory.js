import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getCategoryGame = createAsyncThunk(
  "gameCategory/categoryGame",
  async function (cat) {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      params: {
        category: cat,
      },
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

const gameCategorySlice = createSlice({
  name: "gameCategory",
  initialState: {
    categoreis: [],
    isLoading: false,
    isError: false,
  },

  extraReducers: function (bulider) {
    bulider
      .addCase(getCategoryGame.fulfilled, function (state, actions) {
        state.isLoading = false;
        state.isError = false;
        // console.log(actions.payload);
        state.categoreis = actions.payload;
      })
      .addCase(getCategoryGame.pending, function (state) {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCategoryGame.rejected, function (state) {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default gameCategorySlice.reducer;
