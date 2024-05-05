/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSpecificGame } from "../../Redux/gameSpecificSlice";
import Loading from "../Loading/Loading";
import { getGames } from "../../Redux/gamesSlice";

function Gamedetails() {
  const { id } = useParams();
  let mainImg = useRef(null);

  const { data, isLoading } = useSelector((store) => store.specificGame);
  const { games } = useSelector((store) => store.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificGame(id));
    dispatch(getGames());
    const filterData = games.filter((item) => item.genre === "Shooter");
    console.log(filterData);
    console.log(games);
  }, [id, dispatch]);

  function changeImg(e) {
    mainImg.current.src = e.target.src;
  }
  return (
    <>
      <div className="game-details">
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="row g-3">
                {/* Images */}
                <div className="col-md-6">
                  <div className="screenshots">
                    {/* Main Img */}
                    <div className="main-img">
                      {data?.screenshots.slice(0, 1).map((img) => (
                        <img
                          ref={mainImg}
                          key={img.id}
                          src={img.image}
                          className="w-100"
                          alt=""
                        />
                      ))}
                      {/* All Imgs */}
                      <div className="images">
                        {data?.screenshots.map((img) => (
                          <img
                            onClick={(e) => changeImg(e)}
                            key={img.id}
                            src={img.image}
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Info */}

                <div className="col-md-6">
                  <div className="game-info">
                    <h3>{data?.title}</h3>
                    <h6>
                      {data?.description.split(" ").splice(0, 20).join(" ")}
                    </h6>

                    <p>
                      <i className="fa-regular fa-clock"></i>
                      Released Date :<span> {data?.release_date}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-code"></i>
                      Developers :<span> {data?.developer}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-layer-group"></i>
                      Genres :<span> {data?.genre}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-user-secret"></i>
                      Publishers :<span> {data?.publisher}</span>
                    </p>

                    <Link to={data?.game_url} target="_blank">
                      Play Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Gamedetails;
