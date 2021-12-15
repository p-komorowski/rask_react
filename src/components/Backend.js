import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Backend = () => {
  function handleClickBooks() {
    getBooks();
  }

  const [books, setBooks] = useState([]);

  async function getBooks() {
    await axios
      .get('http://localhost:4000/books/history', { withCredentials: true })
      .then((res) => {
        setBooks(res.data);
      });
  }

  return [
    <button onClick={handleClickBooks} className="btn">
      Show Books
    </button>,

    <div>
      {books.map((book) => (
        <div>
          <h3> IBSN: {book.data} </h3>
          <ul> Title: {book.title} </ul>
          <ul> Price: {book.price} </ul>
          <ul> Author: {book.author} </ul>
          <ul> Count: {book.count} </ul>
          <p>
            {book.bookReview.map((res) => (
              <p>
                {' '}
                <div>
                  <h4>Review</h4>
                </div>{' '}
                <ul> ID: {res.reviewId}</ul> <ul>Review: {res.review}</ul>
              </p>
            ))}
          </p>
          <p>
            {book.priceHistory.map((result) => (
              <div>
                {' '}
                <h4>Price Changes</h4> <ul> ID: {result.idOfPriceHistory}</ul>{' '}
                <ul>Previous Price: {result.previousPriceOfBook}</ul>
                <ul> Current Price: {result.currentPriceOfBook}</ul>
                <ul> Date Of Changes: {result.dateOfChanges}</ul>
              </div>
            ))}
          </p>
        </div>
      ))}
    </div>,
    <div>
      <Link className="btn-back" to="/">
        Go Back
      </Link>
    </div>,
  ];
};

export default Backend;
