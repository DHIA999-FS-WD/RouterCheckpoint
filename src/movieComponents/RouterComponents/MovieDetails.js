import React from "react";
import { data } from "../data";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieDetails({ filteredData }) {
  const { movieName } = useParams();

  return (
    <>
      <div className="moviedetails">
        {filteredData
          .filter((el) => el.title == movieName)
          .map((e) => (
            <div key={e.title}>
              <h4>{e.title}</h4>
              <h5>{e.description}</h5>
              <iframe
                width="560"
                height="315"
                src={e.trailerLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <button>
                <Link to={"/"}>go back</Link>
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieDetails;
