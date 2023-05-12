import React from "react";
import './MoviesCardsStyle.css'
import { Link } from "react-router-dom";

function MovieCard({title,dsc,url,rat}) {
    
  return (
    <Link to={'/MovieDetails'}>
    <div className="card">
        <img src={url} alt="movie's Img" />
        <div className="title">{title}</div>
        <div className="description">{dsc}</div>
        <div className="rating">{rat}</div>
    </div>
    </Link>
  );
}
export default MovieCard;