import React from 'react';
import "./style.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand team-name" href="#">Coast to Coast</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link navbar-section" href="#">Discover <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle navbar-section" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                            Genres
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action and Adventure</a>
                            <a className="dropdown-item" href="#">Classics</a>
                            <a className="dropdown-item" href="#">Fiction</a>
                            <a className="dropdown-item" href="#">History</a>
                            <a className="dropdown-item" href="#">Horror</a>
                            <a className="dropdown-item" href="#">Romance</a>
                        </div>
                    </li>
                </ul>
            </div>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav >
    )
}
export default Navbar;