import React, { useState } from "react";
import "../../style.css";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import CardList from "../Contents/CardList";
import Carousel from "react-elastic-carousel";

const SearchBar = (props) => {
  const [book, setBook] = useState({ book: "" });
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCKZuhy3LKcKQf1mTTHg4vgC-GmUkREuGA"
  );

  const handleSearch = (event) => {
    const book = event.target.value;

    setBook(book);
  };
  // TRIED TO CONDITIONAL RENDER THE LIST OF SEARCHED BOOKS BUT HAS NOT WORKED YET
  // function renderSearch(result)
  // {
  //   if(result.length > 0)
  //   {
  //      result.map((book) => (
  //        <a target="_blank" href={book.volumeInfo.previewLink}>
  //          <img
  //            src={
  //              book.volumeInfo.imageLinks === undefined
  //                ? ""
  //                : `${book.volumeInfo.imageLinks.thumbnail}`
  //            }
  //            alt={book.title}
  //          />
  //        </a>
  //      ));
  //   }
  // }
  function searchBook(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=20"
      )
      .then((data) => {
        setResult(data.data.items);
      });
    //clearSearch();
  }
  function clearSearch() {
    document.getElementById("search-box").value = "";
  }
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
    // <div id="search" className="result">
    <section className="result">
      <form onSubmit={searchBook} action="" className="flex">
        <div className="flex">
          <button type="submit" style={{ backgroundColor: "transparent" }}>
            <BsSearch />
          </button>
          <input
            id="search-box"
            className="search-box"
            placeholder="Search books by name, author,etc ..."
            aria-label="Search books"
            type="text"
            onChange={handleSearch}
            onClick={clearSearch}
          />
        </div>
      </form>
      <Carousel breakPoints={breakPoints}>
        {result.map((book) => (
          <a target="_blank" href={book.volumeInfo.previewLink}>
            <img
              src={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              alt={book.title}
            />
          </a>
        ))}
      </Carousel>
      {/* {renderSearch(result)} */}
    </section>
    // </div>
  );
};

export default SearchBar;
