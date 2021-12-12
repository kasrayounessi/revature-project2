import React, { useState } from "react";
import "../../style.css";
import { BsBookHalf } from "react-icons/bs";
import axios from "axios";
import reactDom from "react-dom";
import CardList from "./CardList";
import { Card } from "react-bootstrap";
const Contents = () => {
  // render books for the rest of the page, leave css for last
  return (
    <div>
      <div id="foryou">
        <section id="romance" className="results">
          <div className="flex">
            <h1 className="section-title">My List</h1>
          </div>
          <div className="list-book">
            <div className="prompt">
              <div className="loader"></div>
            </div>
          </div>
        </section>
      </div>

      <section id="love" className="results">
        <div className="flex">
          <h1 className="section-title">Popular</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
              <div className="loader"></div>
            </div> */}
          <CardList subject="bestseller+books" />
        </div>
        <div className="fade left"></div>
        <div className="fade right"></div>
      </section>
      <section id="fiction" className="results">
        <div className="flex">
          <h1 className="section-title">Fiction</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="popular+fiction+novels" />
        </div>
      </section>
      <section id="fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">Fantasy</h1>
        </div>
        <div className="list-book">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="fantasy+fiction" />
        </div>
      </section>

      <section id="fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">Manga</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="bestseller+manga" />
        </div>
      </section>
      <section id="fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">Science Fiction</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="science+fiction+novel" />
        </div>
      </section>
      <section id="fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">Romance</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="romance+novel" />
        </div>
      </section>
      <section id="fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">AudioBooks</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="audio+book" />
        </div>
      </section>
    </div>
  );
};

export default Contents;
