import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const BookLists = () => {
  const { books } = useSelector((state) => state.user);
  return (
    <div className="books-list">
      {books?.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookLists;
