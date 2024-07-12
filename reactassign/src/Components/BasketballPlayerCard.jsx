import React from "react";
import './BasketballPlayerCard.css';
const BasketballPlayerCard = ({ name, image, position, stats }) => {
  return ( 
        <div class="container">   
        
        <img src={image} alt={`${name}`}  class="playerimage"/>  
      
        <h1>Name: {name}</h1>
        <div className="details">
        <p class='text'><span>Position:</span> {position}</p>        
        <p class='text'><span>Points per Game:</span> {stats.pointsPerGame}</p>
        <p class='text'><span>Assists per Game:</span> {stats.assistsPerGame}</p>
        <p class='text'><span>Rebounds per Game:</span> {stats.reboundsPerGame}</p>   
        </div>
          
    </div>
  
    
  );
};

export default BasketballPlayerCard;
