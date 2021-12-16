import React from "react";
import Carousel from "react-elastic-carousel";
import "../../../style.css";
import gradient from "random-gradient";
import { BsStar, BsStarFill, BsFillPlusCircleFill } from "react-icons/bs";
const Revature = (props) => {
      const { onAdd } = props;
     const bgGradient = {
       // #cbb4d4
       background: `linear-gradient(${props.color},#f8f9fa)`,
     };
     const breakPoints = [
       { width: 500, itemsToShow: 1 },
       { width: 768, itemsToShow: 2 },
       { width: 1200, itemsToShow: 3 },
       { width: 1500, itemsToShow: 4 },
     ];
  return (
    <div>
        <div style={bgGradient} className="book">
          <img
            className="thumbnail"
            src="https://avatars.githubusercontent.com/u/21290724?v=4"
            alt=""
          />
          <div className="book-info">
            <h3 className="book-title">Revature Training</h3>
            <div className="info">
              <button
                onClick={onAdd}
                style={{ background: "inherit", color: "inherit" }}
              >
                Fee: $36,000
              </button>
            </div>
          </div>
        </div>
        ))
    </div>
  );
};

export default Revature;
