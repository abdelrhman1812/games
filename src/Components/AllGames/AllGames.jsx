import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../Redux/gamesSlice";
import Loading from "../Loading/Loading";
import Game from "../Game/Game";
import { increment } from "../../Redux/UpdateShowGames";

function AllGames() {
  const { games, isLoading } = useSelector((store) => store.games);
  const { start, end } = useSelector((store) => store.update);

  const disPatch = useDispatch();

  // Function to handel games From Redux game File
  function disPlayGames() {
    disPatch(getGames());
  }

  useEffect(() => {
    disPlayGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="allGames">
      <div className="container">
        {/* Btn display next and previous Games */}
        <div className="icons-actions py-3 text-center ">
          <i
            onClick={() =>
              disPatch(
                increment({
                  type: "increment",
                  payload: {
                    parameter1: "decrease",
                    parameter2: games,
                  },
                })
              )
            }
            className="fa-solid fa-arrow-left mx-2 "
          ></i>
          <i
            onClick={() =>
              disPatch(
                increment({
                  type: "increment",
                  payload: {
                    nameFunction: "increase",
                    game: games.length,
                  },
                })
              )
            }
            className="fa-solid fa-arrow-right mx-2"
          ></i>
        </div>
        <h2>Games</h2>

        {isLoading ? <Loading /> : ""}
        <div className="row g-5">
          {/* Dispaly Games */}
          {games?.slice(start, end).map((item, index) => (
            <Game
              numberOfgame={start + index + 1}
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.thumbnail}
              url={item.game_url}
              date={item.release_date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllGames;
