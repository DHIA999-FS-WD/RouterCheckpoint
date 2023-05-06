import React from "react";
import './MoviesCardsStyle.css'

function MovieCard({title,dsc,url,rat}) {
    
  return (
    <div className="card">
        <img src={url} alt="movie's Img" />
        <div className="title">{title}</div>
        <div className="description">{dsc}</div>
        <div className="rating">{rat}</div>
    </div>
  );
}
export default MovieCard;