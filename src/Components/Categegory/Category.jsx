import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryGame } from "../../Redux/gameCategory";
import Game from "../Game/Game";
import Loading from "../Loading/Loading";
import { increment } from "../../Redux/UpdateShowGames";

function Category() {
  const { start, end } = useSelector((store) => store.update);

  const { categoreis, isLoading } = useSelector((store) => store.categoryGame);
  const [loadingCategory, setLoadingCategory] = useState(false);

  let disPatch = useDispatch();

  function getCategory(category) {
    try {
      setLoadingCategory(true);
      disPatch(getCategoryGame(category));
      setLoadingCategory(false);
    } catch (error) {
      setLoadingCategory(false);
      console.error("Error fetching category:", error);
    }
  }

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="category">
        <div className="container">
          <div className="btns">
            <button className="btn " onClick={() => getCategory("mmorpg")}>
              Mmorpg
            </button>

            <button className="btn " onClick={() => getCategory("shooter")}>
              Shooter
            </button>

            <button className="btn " onClick={() => getCategory("sailing")}>
              Sailing
            </button>

            <button className="btn " onClick={() => getCategory("pixel")}>
              Pixel
            </button>
          </div>

          {isLoading || loadingCategory ? (
            <Loading />
          ) : (
            <>
              <div className="row g-5">
                {/* Dispaly Games */}

                {categoreis?.slice(start, end).map((item, index) => (
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
            </>
          )}
          {/* Display loading indicator when isLoading or loadingCategory is true */}
        </div>
      </section>
    </>
  );
}

export default Category;
