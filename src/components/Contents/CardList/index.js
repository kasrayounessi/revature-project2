import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from 'react-elastic-carousel'
import "../../../style.css";
import gradient from 'random-gradient'
import { BsStar, BsStarFill, BsFillPlusCircleFill } from "react-icons/bs";

const CardList = (props) => {
    //const {onAdd} = props;
  const [add, setAdd] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    // ran out of my quota for the day so I made a new key
    "AIzaSyCKZuhy3LKcKQf1mTTHg4vgC-GmUkREuGA"
    // "AIzaSyApxBTXTqkBeDIr4O13025SmfzUkmt5jUE"
  );
  useEffect(() => {
    axios
      .get(
        //   "https://www.googleapis.com/books/v1/volumes?q=" +
        //     book +
        //     "&key=" +
        //     apiKey +
        //     "&maxResults=20"
        `https://www.googleapis.com/books/v1/volumes?q=${props.subject}&key=${apiKey}&maxResults=20`
      )
      .then((data) => {
          console.log(data.data.items);
        setResult(data.data.items);
      });
  }, []);
    const addToCart = (img,title, price) => {
      var books = JSON.parse(localStorage.getItem("books"));
      if(books == null) books = [];
      var book = { thumbnail: img, bookTitle: title, bookPrice: price };
     //var books = [book];
     books.push(book);
     localStorage.setItem('books',JSON.stringify(books));
     setAdd("added book");
    };
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
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        className="card-list"
      >
        {result.map((book) => (
          <div style={bgGradient} className="book">
            <img
              className="thumbnail"
              src={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              alt={book.title}
            />
            <div className="book-info">
              <h3 className="book-title">{book.volumeInfo.title}</h3>
              <div className="info">
                <button
                  onClick={() =>
                    addToCart(
                      book.volumeInfo.imageLinks === undefined
                        ? ""
                        : `${book.volumeInfo.imageLinks.thumbnail}`,
                      book.volumeInfo.title,
                      15
                    )
                  }
                  style={{ background: "inherit", color: "inherit" }}
                >
                  Add: $15
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardList;
