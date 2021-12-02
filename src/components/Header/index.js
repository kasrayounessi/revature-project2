import React from "react";

const Header = () => {
    return (
        <div class="jumbotron bg-dark text-light">
            <h1 class="display-4">Welcome to our bookstore!</h1>
            <p class="lead">
                Navigate through our website to check out the most popular books available today
            </p>
            <hr class="my-4" />
            <div className="row">
                <div className="col-sm-4"><a class="btn btn-success btn-lg" href="#" role="button">
                    About us
                </a></div>
                <div className="col-sm-4"><a class="btn btn-success btn-lg" href="#" role="button">
                    Contact us
                </a></div>
                <div className="col-sm-4"><a class="btn btn-success btn-lg" href="#" role="button">
                    Policies
                </a></div>
            </div>

        </div>
    );
};
export default Header;
