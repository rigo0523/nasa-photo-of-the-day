import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Cards from "./Cards";


function CardList() {
    const [nasaData, setImage]= useState([]);
    useEffect(() => {
        axios 
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response.data)
            setImage(response.data)
        })
        .catch(error => {
            console.log(error);
        })
}, []); 

return (
    <div>
      <Cards 
      title={nasaData.title}
      date={nasaData.date}
      hdurl={nasaData.hdurl}
      explanation={nasaData.explanation}
      copyright={nasaData.copyright}
      />
    </div>
)
};

export default CardList;