import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from 'react-elastic-carousel'

const CardList = (props) => {
  const [book, setBook] = useState({ book: "" });
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyCKZuhy3LKcKQf1mTTHg4vgC-GmUkREuGA"
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
        setResult(data.data.items);
      });
  }, []);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 }
  ];
  return (
    <div>
      <Carousel breakPoints={breakPoints}>
        {result.map((book) => (
          <div >
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
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardList;
