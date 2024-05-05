import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./gamesSlice";
import gameSpecificSlice from "./gameSpecificSlice";
import gameCategory from "./gameCategory";
import UpdateShowGames from "./UpdateShowGames";
import storesSlice from "./storesSlice";
import storySpecificSlice from "./storySpecificSlice";
import creatorsSlice from "./creatorsSlice";
import creatorsSpecificSlice from "./creatorsSpecificSlice";

const store = configureStore({
  reducer: {
    games: gamesSlice,
    specificGame: gameSpecificSlice,
    categoryGame: gameCategory,
    update: UpdateShowGames,
    stores: storesSlice,
    specificStores: storySpecificSlice,
    creators: creatorsSlice,
    creatorSpecific: creatorsSpecificSlice,
  },
});

export default store;
