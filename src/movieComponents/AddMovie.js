import React from "react";
import { useEffect, useState } from "react";
import "./RouterComponents/Home.css";

function AddMovie({newData,setNewData}){
    const [posterURL, setfposterURL] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [rating, setrating] = useState("");
    const handleAddUrl = (e) => {
      setfposterURL(e.target.value);
    };
    const handleAddTitle = (e) => {
      settitle(e.target.value);
    };
    const handleAddDesc = (e) => {
      setdescription(e.target.value);
    };
    const handleAddRate = (e) => {
      setrating(e.target.value);
    };
  
    const handleAddMovie = (e) => {
      e.preventDefault();
      const newMovie = {
        posterURL,
        title,
        description,
        rating,
      };
      setNewData([...newData, newMovie]);
    }
    return(
        <div className="addMovieCard">
            {/* form to add movie  */}
        <form onSubmit={handleAddMovie}>
            <label >Add url</label>
          <input
            type="text"
            id="posterURL"
            placeholder="Img URL"
            required
            value={posterURL}
            onChange={handleAddUrl}
          />
            <label >Add Title</label>
          <input
            type="text"
            id="title"
            placeholder="Title"
            required
            value={title}
            onChange={handleAddTitle}
          />
            <label >Add description</label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            required
            value={description}
            onChange={handleAddDesc}
          />
            <label >Add Rate</label>
          <input
            type="number"
            id="rating"
            placeholder="Rating"
            min="0"
            max="10"
            step="0.1"
            required
            value={rating}
            onChange={handleAddRate}
          />
          <button type="submit">Add</button>
        </form>
        </div>
    );
};
export default AddMovie;