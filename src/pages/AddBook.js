import React, { useState } from "react";
import { Button, Col, Form, Spinner } from "react-bootstrap";
import DashboardLayout from "../components/layout/DashboardLayout.js";
import book from "../assets/books.jpg";
import { toast } from "react-toastify";
import { addBook } from "../helpers/axios.js";
const AddBook = () => {
  const [formData, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { status, message } = await addBook(formData);

    if (status) {
      setIsLoading(false);
      return toast[status](message);
    }
    return;
  };

  return (
    <DashboardLayout>
      <div className="add">
        <div className="add-top">
          <h1>Add New Book</h1>
        </div>
        <div className="add-bottom">
          <Col md={7} className="d-none d-sm-block">
            <img src={book} alt="book-img" style={{ width: "100%" }} />
          </Col>
          <Col md={5} sm={12} xs={12}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Book Title"
                  required
                  type="text"
                  name="title"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  placeholder="Book Author"
                  required
                  type="text"
                  name="author"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  placeholder="ISBN"
                  required
                  type="text"
                  name="isbn"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Year Published</Form.Label>
                <Form.Control
                  placeholder="year published"
                  required
                  type="number"
                  name="year"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Thumbinal</Form.Label>
                <Form.Control
                  placeholder="image"
                  required
                  type="text"
                  name="thumbinal"
                  onChange={handleOnChange}
                ></Form.Control>
              </Form.Group>
              <Button variant="warning" type="submit" className="mt-4">
                Add Book
                <span>
                  {isLoading && <Spinner animation="border" variant="dark" />}
                </span>
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddBook;
