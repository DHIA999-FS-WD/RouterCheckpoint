import React from "react";
import "./Home.css";
// i import the structure of movieCard
import MovieCard from "../MovieCards/MovieCards";

// i import the movies 's data
import { data } from "../data";
// i import useState (HOOKS)
import { useEffect, useState } from "react";
import FilterMovie from "../FilterMovie";
import AddMovie from "../AddMovie";

function Home({ NewData, setNewData, filteredData, setFilteredData }) {
  // console.log(NewData);
  return (
    <div className="movieApp">
      <FilterMovie
        newData={NewData}
        setNewData={setNewData}
        setFilteredData={setFilteredData}
      />
      <div className="body">
        {/* i use map methode to render the filtred movies  */}
        {filteredData.map((e) => (
          <MovieCard
            key={e.title}
            title={e.title}
            dsc={e.description}
            url={e.posterURL}
            rat={e.rating}
          />
        ))}
      </div>
      <AddMovie newData={NewData} setNewData={setNewData} />
    </div>
  );
}

export default Home;
