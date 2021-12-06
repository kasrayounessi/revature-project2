import React from "react";

const Book = (props) => {
  return (
    <div class="col-sm-3">
      <div class="card">
        <img class="card-img-top" src={ require("./"+props.data.imageLink).default } width="100" height="200"/>
        <div class="card-body">
          <h5 class="card-title">{props.data.title}</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
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
