import React from "react";
import './card.css';


function Card(props){
    return(
           <div className="card--wraper">
                <div className="card">
                    <div><img src={`/images/${props.img}`} alt="brand logo"/></div>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                </div>
           </div>
    )
}

export default Card;