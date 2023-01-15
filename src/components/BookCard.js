import React from "react";
import { Button, Card } from "react-bootstrap";
import { borrowBook, deleteBook } from "../helpers/axios";
import { toast } from "react-toastify";
const BookCard = ({ book, user, fetchBooks }) => {
  const hadleBorrow = async (bookID) => {
    if (bookID) {
      const { status, message } = await borrowBook(bookID);

      status === "success" ? toast.success(message) : toast.warning(message);
    }
  };

  const handleDelete = async (bookID) => {
    if (
      window.confirm(
        "Are you sure you want to delete this book from the system"
      )
    ) {
      if (bookID) {
        const { status, message } = await deleteBook(bookID);
        toast[status](message) && fetchBooks();
      }
    }
  };
  return (
    <Card style={{ width: "10rem", border: "home" }}>
      <Card.Img
        src={book?.thumbinal}
        style={{ width: "50%", margin: "1rem auto" }}
      />
      <Card.Body className="text-center">
        <Card.Title>{book.title}</Card.Title>
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="warning" onClick={() => hadleBorrow(book._id)}>
            Borrow
          </Button>
          {user?.role === "teacher" && (
            <Button variant="danger" onClick={() => handleDelete(book._id)}>
              Delete
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
