import React from "react";
import Item from "./Item";
import { books } from "../Content/TopHundredBooks/100-books";
import CheckOutMenu from "./CheckOutMenu";

const ShoppingCart = () => {
  const booksRendering = books.slice(0, 5);
  console.log(booksRendering);
  return (
      <>
    <div className="container">
        <br />
        <h1 className="text-success" style={{textAlign:"center"}}>Shopping Cart</h1>
        <hr/>
      <div className="row">
        <div className="cols-lg-9">
          {booksRendering.map((book) => (
            <Item data={book} />
          ))}
        </div>
        <div className="cols-lg-3">
          <CheckOutMenu data={80.0} />
        </div>
      </div>
    </div>
    <hr />
    </>
  );
};

export default ShoppingCart;
