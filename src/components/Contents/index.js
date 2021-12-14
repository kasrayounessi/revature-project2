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
      {/* <div id="foryou">
        <section id="romance" className="results">
          <div className="flex">
            <h1 className="section-title">My Book Shelf</h1>
          </div>
          <div className="list-book">
            <div className="prompt">
              <div className="loader"></div>
            </div>
          </div>
        </section>
      </div> */}

      <section id="Popular" className="results">
        <div className="flex">
          <h1 className="section-title">Popular</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
              <div className="loader"></div>
            </div> */}
          <CardList subject="bestseller+books" color="#ffdde1" />
        </div>
        <div className="fade left"></div>
        <div className="fade right"></div>
      </section>
      <section id="Fiction" className="results">
        <div className="flex">
          <h1 className="section-title">Fiction</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="popular+fiction+novels" color="#DECBA4" />
        </div>
      </section>
      <section id="Fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">Fantasy</h1>
        </div>
        <div className="list-book">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="fantasy+fiction" color="#ffdde1" />
        </div>
      </section>

      <section id="Manga" className="results">
        <div className="flex">
          <h1 className="section-title">Manga</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="bestseller+manga" color="#e1eec3" />
        </div>
      </section>
      <section id="SciFi" className="results">
        <div className="flex">
          <h1 className="section-title">Science Fiction</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="science+fiction+novel" color="#ffdde1" />
        </div>
      </section>
      <section id="Romance" className="results">
        <div className="flex">
          <h1 className="section-title">Romance</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="romance+novel" color="#DECBA4" />
        </div>
      </section>
      <section id="Poetry" className="results">
        <div className="flex">
          <h1 className="section-title">Poetry</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="poetry+poems" color="#C9D6FF" />
        </div>
      </section>
      <section id="AudioBooks" className="results">
        <div className="flex">
          <h1 className="section-title">AudioBooks</h1>
        </div>
        <div className="list-book ">
          {/* <div className="prompt">
            <div className="loader"></div>
          </div> */}
          <CardList subject="audio+book" color="#e1eec3" />
        </div>
      </section>
    </div>
  );
};

export default Contents;
