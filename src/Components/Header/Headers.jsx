import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../Redux/gamesSlice";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../Loading/Loading";
function Headers() {
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

  // Slider Setting
  const settings = {
    fade: true,
    speed: 700,
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Slider Setting Buttom

  const settingSlider = {
    // dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "0",
    autoplay: true,
    arrows: false,
    // fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <header>
        <div className="container">
          <div className=" main">
            {/* Left Slider */}
            <div className="images">
              <div className="item overflow-hidden">
                <Slider {...settings}>
                  <div className="imgs">
                    <img
                      src={require("../../Assets/Images/Header/1.png")}
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <div className="imgs">
                    <img
                      src={require("../../Assets/Images/Header/2.png")}
                      className="w-100"
                      alt=""
                    />
                  </div>
                  <div className="imgs">
                    <img
                      src={require("../../Assets/Images/Header/3.png")}
                      className="w-100"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>
            {/* Right Slider */}
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <div className=" right-game">
                  {games?.slice(0, 4).map((item) => (
                    <div key={item.id} className="game">
                      <figure>
                        <Link to={`/gamedetails/${item.id}`}>
                          <img src={item.thumbnail} alt="" />
                        </Link>
                        <div className="info">
                          <h3 className="h6">{item.title}</h3>
                          <p>
                            Release date : <span>{item.release_date}</span>
                          </p>
                        </div>
                      </figure>

                      {/* Icons */}
                      <img
                        className="controls"
                        src={require("../../Assets//Images/Icons Game/control.png")}
                        alt="controls"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Bottom Slider */}

          <div className="row mt-3">
            {isLoading ? (
              ""
            ) : (
              <>
                <Slider {...settingSlider}>
                  {games?.slice(20, 30).map((item) => (
                    <div key={item.id} className="gameSider">
                      <Link to={`/gamedetails/${item.id}`}>
                        <figure>
                          <img src={item.thumbnail} className="w-100" alt="" />
                          <div className="info">
                            <h3 className="h6">
                              {item.title.split(" ").slice(0, 2).join("")}
                            </h3>
                          </div>
                        </figure>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Headers;
