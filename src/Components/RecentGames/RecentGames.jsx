import React, { useEffect } from "react";
import { getGames } from "../../Redux/gamesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function RecentGames() {
  const { games, isLoading } = useSelector((store) => store.games);
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
    <>
      <section className="recent-games">
        <div className="container">
          <h2 className=" ">
            Recent <span>Games</span>
          </h2>
          <div className="row g-3 mt-3">
            {games?.slice(15, 18).map((item) => (
              <div key={item.id} className="col-md-4 ">
                <div className="recent-game">
                  <figure>
                    <Link to={`/gamedetails/${item.id}`}>
                      <img src={item.thumbnail} className="w-100" alt="" />
                    </Link>
                  </figure>
                  <h3 className="h6">
                    {item.title.split(" ").splice(0, 2).join(" ")}
                  </h3>
                  <h6 className="mb-2">
                    {item.short_description.split(" ").splice(0, 2).join(" ")}
                  </h6>
                  <div className="icons text-end">
                    <i className="fa-regular fa-star text-outline-warning bg-warning"></i>
                    <i className="fa-regular fa-heart text-outline-danger bg-danger rounded-0"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentGames;
