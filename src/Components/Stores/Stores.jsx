import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStores } from "../../Redux/storesSlice";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function Stores() {
  const dispatch = useDispatch();

  const { storess, isLoading } = useSelector((store) => store.stores);

  console.log(storess);
  useEffect(() => {
    dispatch(getStores());
  }, []);

  return (
    <section className="stores">
      <div className="container">
        <h2 className="text-light">Stores</h2>
        <div className="row g-3 mt-5">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {storess.map((item) => (
                <div key={item.id} className=" col-md-6 col-lg-3">
                  <figure>
                    <Link to={`/storydetails/${item.id}`}>
                      <img
                        src={item.image_background}
                        alt={item.name}
                        className="w-100"
                        loading="lazy"
                      />
                    </Link>
                  </figure>
                  <h6>{item.name}</h6>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Stores;
