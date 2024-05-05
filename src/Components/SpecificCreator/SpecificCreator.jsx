import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSpecificCreator } from "../../Redux/creatorsSpecificSlice";
import Loading from "../Loading/Loading";

function SpecificCreator() {
  const { id } = useParams();

  console.log(id);
  const dispatch = useDispatch();

  const { creatorSpecific, isLoading } = useSelector(
    (store) => store.creatorSpecific
  );

  function getSpecificCreators() {
    dispatch(getSpecificCreator(id));
  }

  console.log(creatorSpecific);
  useEffect(() => {
    getSpecificCreators();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="specificCreator">
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="row g-3 mt-3 ">
              <div className="col-lg-6">
                <figure>
                  <img src={creatorSpecific.image} className="w-100" alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <h2>{creatorSpecific.name}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: creatorSpecific.description,
                    }}
                  />
                  <h3>
                    Positions :
                    {creatorSpecific.positions?.map((item) => (
                      <span key={item.id}>{item.name}</span>
                    ))}
                  </h3>
                  <h3>
                    Ratings :
                    <span>
                      {creatorSpecific.rating}
                      <i className="fa fa-star text-warning"></i>
                    </span>
                  </h3>
                  {creatorSpecific.ratings?.map((item) => (
                    <h3 key={item.id}>
                      {item.title} : <span>{item.percent}</span>
                    </h3>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default SpecificCreator;
