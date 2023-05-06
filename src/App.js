import React from "react";
import "./App.css";
// i import the structure of movieCard
import MovieCard from "./movieComponents/MovieCards/MovieCards";

// i import the movies 's data
import { data } from "./movieComponents/data.js";
// i import useState (HOOKS)
import { useEffect, useState } from "react";

import FilterMovie from "./movieComponents/FilterMovie";

import AddMovie from "./movieComponents/AddMovie"
function App() {
  const [NewData, setNewData] = useState(data);
  const [filteredData, setFilteredData] = useState(NewData);


  
  
  
  // console.log(NewData);
  return (
    <div className="movieApp">
      <FilterMovie  newData={NewData} setNewData ={setNewData} setFilteredData={setFilteredData} />
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
      <AddMovie newData={NewData} setNewData ={setNewData}/>
    </div>
  );
}

export default App;










