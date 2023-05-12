import React from "react";
import {Routes,Route} from 'react-router-dom'
import MovieDetails from "./movieComponents/RouterComponents/MovieDetails";
import Home from "./movieComponents/RouterComponents/Home";

import { data } from "./movieComponents/data";

  
  
  
 function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/MovieDetails" element={<MovieDetails data={data} />} />
        <Route path="/*" element={<div>404 .... NOT FOUND</div>} />
      </Routes>
    </>
  );
 }


export default App;








