import React from "react";
import Carousel1 from "./Carousel1";

const Header = () => {
  return (
    <div class="jumbotron bg-dark text-light">
      <h1 class="display-4">Welcome to our bookstore!</h1>
      <p class="lead">
        Navigate through our website to check out the most popular books
        available today
      </p>
      <hr class="my-4" />
      <Carousel1 />
    </div>
  );
};
export default Header;
