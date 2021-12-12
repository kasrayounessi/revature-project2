import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../style.css";
import {
  BsSearch,
  BsFillArrowUpCircleFill,
  BsBookHalf,
  BsFillEmojiHeartEyesFill,
  BsVectorPen,
  BsHeadphones,
  BsSuitHeartFill,
} from "react-icons/bs";
import { GiAncientSword, GiSpaceSuit } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg ">
      <a className="navbar-brand" href="#">
        Coast to Coast
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <span className="icon">
                <BsSearch />
              </span>
              Search <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <BsFillEmojiHeartEyesFill />
              </span>
              My List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span className="icon">
                <BsFillArrowUpCircleFill />
              </span>
              Popular
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <BsBookHalf />
              </span>
              Fiction
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <GiAncientSword />
              </span>
              Fantasy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <BsVectorPen />
              </span>
              Manga
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <GiSpaceSuit />
              </span>
              Sci-Fi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <BsSuitHeartFill />
              </span>
              Romance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon">
                <BsHeadphones />
              </span>
              AudioBooks
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
