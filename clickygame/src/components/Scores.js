import React from "react";

function Scores (props){
    return (
        <div className = "scoreCounter">
        <h2> Score: {props.score} </h2>
        <h2> Top Score: {props.topScore} </h2>
        </div>
    )
}

export default Scores;
