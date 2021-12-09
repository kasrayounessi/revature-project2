import React from "react";
import Book from "./Book";
import { books } from "./100-books";

const TopHundredBooks = () => {
  return (
    <div className="container">
      <br />
      <h1 className="text-success" style={{textAlign:"center"}}>Top 100 Books</h1>
      <hr />
      <div class="row">
        {books.map((book)=> {
          if(book.year<0){
            book.year = (book.year*-1) + "BC";
          }
        })}
        {books.map((book) => (
          <Book data={book} />
        ))}
      </div>
    </div>
  );
};

export default TopHundredBooks;
