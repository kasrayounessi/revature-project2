import React from "react";
import bookLogo from "./Book.svg";
import './style.css';


const Item = (props) => {
  return (
    <div>
    <div className="shopping-cart-item-custom card bg-dark text-light" style={{width:"21rem"}}>
    <img className="shopping-cart-item-image-custom card-img-top" src={bookLogo} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text text-success">Price: $40</p>
      </div>
    </div>
    <hr />
    </div>
  );
};

export default Item;
