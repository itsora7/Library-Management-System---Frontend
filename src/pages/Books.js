import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import BookLists from "../components/BookLists";
import DashboardLayout from "../components/layout/DashboardLayout";
import { getBooksAction } from "../redux/book/BookAction";

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksAction);
  }, [dispatch]);

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          <BookLists />
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Books;
