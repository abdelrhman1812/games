import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificStory } from "../../Redux/storySpecificSlice";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function Storydetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { story, isLoading } = useSelector((store) => store.specificStores);

  function getDetaislStory() {
    dispatch(getSpecificStory(id));
  }

  console.log(story);
  useEffect(() => {
    getDetaislStory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="storydetails">
      <div className="container">
        {isLoading ? <Loading /> : ""}
        <div className="row g-3">
          <h2>{story.name}</h2>
          <div className="col-md-6">
            <figure>
              <img
                src={story.image_background}
                className="w-100"
                alt={story.name}
              />
            </figure>
          </div>
          <div className="col-md-6">
            <div dangerouslySetInnerHTML={{ __html: story.description }} />
            <Link to={`https://${story.domain}`} target="_blank">
              More Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Storydetails;
