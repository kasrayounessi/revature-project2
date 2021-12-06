import React from "react";

const Book = (props) => {
  return (
    <div class="col-sm-4">
      <div class="card">
        <img class="card-img-top" src={ require("./"+props.data.imageLink).default }  height="300"/>
        <div class="card-body">
          <h6 class="card-title">{props.data.title}</h6>
          <p class="card-text">
            Country: {props.data.country} <br/> Year: {props.data.year} <br/> Pages: {props.data.pages}
          </p>
          <a href="#" class="btn btn-success btn-block">
            Buy now
          </a>
        </div>
      </div>
      <br/>
    </div>
  );
};

export default Book;
