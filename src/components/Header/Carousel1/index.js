import React from 'react';
import angels from './love-of-angels.svg'
import horse from './horse.svg';

const Carousel1 = () => {
    return(
        <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Harry_Potter_wordmark.svg" alt="First slide" height="200"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={angels} alt="Second slide" height="200" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={horse} alt="Third slide" height="200" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Carousel1;