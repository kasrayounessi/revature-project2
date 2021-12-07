import React from "react";
import './style.css';

const AudioContents = (props) => {
  return (
    <div className="audio-content-custom card">
      <div className="card-body bg-dark text-light" style={{width: "18rem"}}>
        <h5 className="card-title">{props.data.collectionName}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.data.wrapperType}</h6>
        <p className="card-text">
          Country:{" " + props.data.country}
          <br/>
          Price: {props.data.collectionPrice + " " + props.data.currency}
        </p>
        <a href="#" className="btn btn-success btn-block">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default AudioContents;
