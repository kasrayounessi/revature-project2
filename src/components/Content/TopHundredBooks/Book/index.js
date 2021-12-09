import React from "react";
import { useDispatch } from "react-redux";
import store from "../../../../store";
import $ from 'jquery'; 

const Book = (props) => {

  const dispatch = useDispatch();

  const sendToCart = (book) => {
    dispatch({type: "add", payload: {
      content: book
    }
  });

  $(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
});
  
    
  }
  return (
    <div class="col-sm-4">
      <div class="card bg-dark text-light">
        <img class="card-img-top" src={ require("./"+props.data.imageLink).default }  height="300"/>
        <div class="card-body">
          <h6 class="card-title">{props.data.title}</h6>
          <p class="card-text">
            Country: {props.data.country} <br/> Year: {props.data.year} <br/> Pages: {props.data.pages}
          </p>
          
          <button type="button" class="btn btn-success btn-block" data-toggle="popover" title={props.data.title} data-placement="bottom" data-content="Price: 40 USD" onClick={sendToCart.bind(this, props.data)}>Buy Now</button>

        </div>
      </div>
      <br/>
    </div>
  );
};

export default Book;
