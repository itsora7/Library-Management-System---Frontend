import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import BookLists from "../components/BookLists";
import DashboardLayout from "../components/layout/DashboardLayout";
import { getBook } from "../helpers/axios";

const Books = () => {
  const [user, setUser] = useState({});
  const [books, setBooks] = useState({});
  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    if (u) {
      return setUser(u);
    }
    return;
  }, []);

  const fetchBooks = async () => {
    const response = await getBook();

    setBooks(response.books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookLists books={books} fetchBooks={fetchBooks} user={user} />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
