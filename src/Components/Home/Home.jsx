import React from "react";
import Headers from "../Header/Headers";
import RecentGames from "../RecentGames/RecentGames";
import Latestartical from "../Latestartical/Latestartical";
import Teams from "../Teams/Teams";

function Home() {
  return (
    <>
      <Headers />
      <Latestartical />
      <RecentGames />
      <Teams />
    </>
  );
}

export default Home;
