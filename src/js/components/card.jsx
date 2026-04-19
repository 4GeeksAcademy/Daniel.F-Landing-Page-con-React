import React from "react";

function Card(props){
    return (
        <div className=" h-100 card row container-fluid display-flex container text-center col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
export default Card;