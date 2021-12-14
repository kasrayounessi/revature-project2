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
import { Link } from "react-scroll";

const Navbar = ({handleLoginClick}) => {

  const handleClick = () => {
    handleLoginClick();
  }
  
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light text ">
      <a className="navbar-brand" href="#">
        Read Cheap
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
          <Link
            className="nav-item active"
            activeClass="active"
            to="Search"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link" href="#">
              <span className="icon">
                <BsSearch />
              </span>
              Search <span className="sr-only">(current)</span>
            </a>
          </Link>

          <Link
            className="nav-item"
            activeClass="active"
            to="Popular"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link" href="#">
              <span className="icon">
                <BsFillArrowUpCircleFill />
              </span>
              Popular
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="Fiction"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <BsBookHalf />
              </span>
              Fiction
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="Fantasy"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <GiAncientSword />
              </span>
              Fantasy
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="Manga"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <BsVectorPen />
              </span>
              Manga
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="SciFi"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <GiSpaceSuit />
              </span>
              Sci-Fi
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="Romance"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <BsSuitHeartFill />
              </span>
              Romance
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="Poetry"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <BsFillEmojiHeartEyesFill />
              </span>
              Poetry
            </a>
          </Link>
          <Link
            className="nav-item"
            activeClass="active"
            to="AudioBooks"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <a className="nav-link " href="#">
              <span className="icon">
                <BsHeadphones />
              </span>
              AudioBooks
            </a>
          </Link>
          <Link className="nav-item">
            <a className="nav-link " href="#">
              <span className="icon"></span>
              Cart
            </a>
          </Link>
          <li className="nav-item">
            {/* <a className="nav-link " href="#"> */}
            <span className="icon nav-link" onClick={handleClick}>
              Login
            </span>
            {/* </a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
