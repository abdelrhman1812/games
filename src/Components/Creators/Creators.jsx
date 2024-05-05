import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCreators } from "../../Redux/creatorsSlice";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

function Creators() {
  const { creator, isLoading } = useSelector((store) => store.creators);

  const dispatch = useDispatch();

  function getCreator() {
    dispatch(getCreators());
  }

  console.log(creator);
  useEffect(() => {
    getCreator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="creators">
      <div className="container">
        <h2>Creators</h2>
        <div className="row g-3">
          {isLoading ? <Loading /> : ""}
          {creator.map((item) => (
            <div key={item.id} className="col-md-4">
              <Link to={`/creatordetails/${item.id}`}>
                <div className="creator">
                  <figure>
                    <img
                      src={item.image_background}
                      className="w-100 bg"
                      alt={item.name}
                    />
                    <img
                      src={item.image}
                      className=" personal"
                      alt={item.name}
                    />
                  </figure>
                  <h6>{item.name}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Creators;
