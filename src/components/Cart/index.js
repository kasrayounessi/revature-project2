import React, { useState } from "react";
import "../../style.css";
import { BsSearch, BsFillPlusCircleFill } from "react-icons/bs";
import axios from "axios";
import CardList from "../Contents/CardList";
import Carousel from "react-elastic-carousel";

//import "./cart.css";
/*GO TO CARDLIST OR SEARCHBAR TO SEE HOW THE GOOGLE BOOKS API IS IMPLEMENT AND HOW DATA IS READ. YOU JUST NEED THE TITLE MAYBE THE THUMBNAIL IF YOU WANT
BUT NOT IMPORTANT I THINK RIGHT. HARDCODE THE PRICE TO $15 BECAUSE THAT'S THE PRICE OF ALL THE BOOKS IN MY LATEST COMMIT. EASIER THAT WAY I THINK*/
/*THIS CART COMPONENT IS WRAPPED IN THE MODAL COMPONENT, 
YOU DON'T REALLY NEED TO EDIT THE MODAL COMPONENT UNLESS THERE IS A CSS ISSUE I THINK,
WHATEVER YOU WORK ON HERE WILL SHOW UP AS A POP UP WHEN YOU CLICK ON CART IN THE NAVBAR
REMEMBER WHEN ADDING STUFF TO THE CART FROM CARDLIST COMPONENT IN CONTENTS COMPONENT THAT WE ALSO NEED TO DO THE 
SAME THING TO  SEARCHBAR COMPONENT BECAUSE THOSE BOOKS ARE RENDERED SEPERATELY*/

const Cart = (props) => {
  const bgGradient = {
    background: `linear-gradient(#92FE9D,#f8f9fa)`,
  };
  const thumbnail = null;
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  var books = localStorage.getItem("books");
  if (books == undefined) var result = [];
  else {
    var result = JSON.parse(books);
  }
  // FUNCTIONS FOR THE BACKEND
  // ADD BOOKS TO CART FROM SEARCHBAR OR CARDLIST COMPONENT, THE ADD FUNCTION IS IN THERE,
  const remove = () => {
    console.log("Removed book but not really.");
  };
  const purchaseAll = () => {
    console.log("Purchased all but not really");
  };

  const { cartItems, onAdd, onRemove } = props;
  return (
    <div>
      {result.length > 0 ? (
        <section id="Fiction" className="results">
          <div className="flex">
            <h1 className="section-title">Your cart</h1>
            <button
              onClick={() => purchaseAll()}
              style={{ background: "inherit", color: "inherit" }}
            >
              Purchase All
            </button>
          </div>
          <div className="list-book ">
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
              className="card-list"
            >
              {result.map((book) => (
                <div style={bgGradient} className="book">
                  <img
                    className="thumbnail"
                    src={book.thumbnail}
                    alt={book.title}
                  />
                  <div className="book-info">
                    <h3 className="book-title">{book.bookTitle}</h3>
                    <div className="info">
                      <button
                        onClick={() => remove()}
                        style={{ background: "inherit", color: "inherit" }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      ) : (
        console.log(1)
      )}
    </div>
  );
};

export default Cart;

/**<section id="Fiction" className="results">
        <div className="flex">
          <h1 className="section-title">Fiction</h1>
        </div>
        <div className="list-book ">
          
       //   <CardList
       //     subject="popular+fiction+novels"
       //     color="#DECBA4"
            
       //   />
      //  </div>
     // </section> */
