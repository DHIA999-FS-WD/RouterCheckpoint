import React from "react";
import { useEffect, useState } from "react";


function MoviesFiltered({newData,setFilteredData}) {

  
    // i use 2 useState to hold filtered values for title and Rate of the movies
    const [titleFilter, setTitleFilter] = useState("");
    const [rateFilter, setRateFilter] = useState("");
    // function to update filtered title 's value
    const handleTitleChange = (e) => {
      setTitleFilter(e.target.value);
    };
    // function to update filtered Rate 's value
    const handleRateChange = (e) => {
      setRateFilter(e.target.value);
    };
    // i create a function to give the movies that Match with filtered values and i use filter mothod
    const filterMovies = () => {
      const filteredMovies = newData.filter((e) => {
        const titleMatch = e.title
          .toLowerCase()
          .includes(titleFilter.toLowerCase());
        const rateMatch = rateFilter === "" || e.rating >= rateFilter;
        return titleMatch && rateMatch;
      });
      setFilteredData(filteredMovies);
    };
  
    useEffect(() => {
      filterMovies();
    }, [rateFilter, titleFilter,newData]);
   
 
    return(
        <div>
            <div className="filter">
        {/* filter by title */}
        <div className="byTitle">
          <label htmlFor="">Filter BY Title</label>
          <input type="text" value={titleFilter} onChange={handleTitleChange} />
        </div>
        {/* filetr by Rate */}
        <div className="byRate">
          <label htmlFor="">Filter BY Rate</label>
          <select
            name="rate of Movie"
            id="Rate"
            value={rateFilter}
            onChange={handleRateChange}
          >
            <option value="">All</option>
            <option value="9">9+</option>
            <option value="8">8+</option>
            <option value="7">7+</option>
            <option value="6">6+</option>
            <option value="5">5+</option>
            <option value="4">4+</option>
            <option value="3">3+</option>
            <option value="2">2+</option>
            <option value="1">1+</option>
            <option value="0">0+</option>
          </select>
        </div>
      </div>
        </div>
    );
}
export default MoviesFiltered;