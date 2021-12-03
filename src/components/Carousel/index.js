import React from "react";
import "./style.css";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide "
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://imgix.bustle.com/uploads/image/2020/9/3/81f07923-8de2-4007-bb89-c8c5b2b0c8b7-dune-book-cover.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/4bcf3981646493.5d08b72093df8.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://www.barkeranimation.com/media/catalog/product/cache/1/image/69ce6b71b8813d89313be6f869039d3f/4/9/4992.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
