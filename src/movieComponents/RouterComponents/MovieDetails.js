import React from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';


function MovieDetails({data}) {


  return (
      <>
      

      <div className='moviedetails'>
                  <h2>Titre :  The GodFather</h2>
                  <p>This movie is regarded as one of the greatest films of all time and won the Academy Award for Best Picture...</p>
                  <iframe width="560" height="315" src={'https://youtu.be/UaVTIH8mujA'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              </div>
          <button><Link to={'/'}>Back Home</Link></button>
      </>
  );
}

export default MovieDetails;
