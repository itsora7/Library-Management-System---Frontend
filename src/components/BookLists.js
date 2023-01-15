import React from "react";
import BookCard from "./BookCard";

const BookLists = ({ books, fetchBooks, user }) => {
  const data = Array.from(books);

  return (
    <div className="books-list">
      {data?.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          user={user}
          fetchBooks={fetchBooks}
        />
      ))}
    </div>
  );
};

export default BookLists;
