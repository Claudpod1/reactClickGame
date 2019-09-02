import React from "react";

function Images(props) {
    return (
        <div className="card">
            <img className="card-img-top"
                src={props.image}
                alt={props.name}
                value={props.value}
                // onClick={() => props.score(props.id)}
            />
        </div>
    )
}

export default Images