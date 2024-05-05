import React, { useState } from "react";
import articals from "../../Assets/Data/artical";

export default function Latestartical() {
  const [artical, setArtical] = useState(articals);
  const [item, setItem] = useState(articals[0]);

  function handleChange(id) {
    console.log(id);
    setItem(articals[id]); // Corrected typo from artical[id] to articals[id]
  }

  return (
    <div className="latestartical">
      <div className="container">
        <h2>
          Latest <span>Artical</span>
        </h2>
        <div className="row g-3 mt-2">
          <div className="col-lg-6">
            <figure>
              <img
                src={require("../../Assets/Images/Artical/img-artical.png")}
                alt="artical"
                className="w-100"
              />
            </figure>
          </div>
          <div className="col-lg-6">
            <h3>Why Cypher Joined Protocol Sight</h3>
            <p>
              Purus senectus vulputate elit pellentesque. Ut donec pretium,
              curabitur sed proin. Tristique feugiat massa fames faucibus
              condimentum quam at. Sed tellus praesent habitant tortor. Sed
              aliquet dapibus fermentum iaculis. Purus senectus vulputate elit
              pellentesque. Ut donec pretium, curabitur sed proin. Tristique
              feugiat massa fames faucibus condimentum quam at. Sed tellus
              praesent habitant tortor. Sed aliquet dapibus fermentum iaculis.
            </p>
          </div>
        </div>

        <div className="row mt-2 g-3">
          <div className="col-md-8 order-1 order-md-0">
            <div className="row g-3">
              {artical.map((game) => (
                <div
                  onClick={() => {
                    handleChange(game.id);
                  }}
                  key={game.id}
                  className="col-md-6 col-lg-4"
                >
                  <figure>
                    <img
                      src={require(`../../Assets/Images/Artical/${game.img}`)}
                      className="w-100"
                      alt=""
                    />
                  </figure>
                  <h3>{game.titel}</h3>
                  <p>
                    <span className="author">{game.author}</span>
                    <span>{game.datePuplisher}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <figure>
                <img
                  src={require(`../../Assets/Images/Artical/${item.img}`)}
                  alt=""
                />
              </figure>
              <p className="justify-content-center align-items-center">
                <span className="author">{item.author}</span>
                <span>{item.datePuplisher}</span>
              </p>
              <h3>{item.titel}</h3>
              <p>
                Purus senectus vulputate elit pellentesque. Ut donec pretium,
                curabitur sed proin. Tristique feugiat massa fames faucibus
                condimentum quam at. Sed tellus praesent habitant tortor. Sed
                aliquet dapibus fermentum iaculis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
