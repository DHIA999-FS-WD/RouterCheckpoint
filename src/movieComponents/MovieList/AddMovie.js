import React from "react";


function AddMovie() {
    const handleSubmit =() =>{
        
        document.getElementById('AddUrl').value;
        document.getElementById('AddTitle').value;
        document.getElementById('AddUrl').value;
        document.getElementById('AddRate').value;

    };
    return (
        <form onSubmit={handleSubmit}>
            <label >Add Img's url for Your's Movie</label>
                <input type="text" id="AddUrl" />

            <label >Add Title of Your's Movie</label>
                <input type="text" id="AddTitle" />

            <label >Add description for  Your's Movie</label>
                <input type="text"  id="AddDsc" />
            
            <label >Add Rete of Your's Movie</label>
                <input type="number"  id="AddRate" />

            <button type="submit" >Add</button>
        </form>
        );
    }
export default AddMovie;