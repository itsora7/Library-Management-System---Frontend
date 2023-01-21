import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import DashboardLayout from "../components/layout/DashboardLayout";
import { toast } from "react-toastify";
import { updatePassword } from "../helpers/axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};

const Profile = () => {
  const [user, setUser] = useState({});
  const [updatePassForm, setUpdatePassForm] = useState(initialState);
  const [updateDetails, setUpdateDetails] = useState();
  const [showForm, setShowForm] = useState(false);
  const [showPassForm, setShowPassForm] = useState(false);
  const navigate = useNavigate();

  const handleOnPassChange = (e) => {
    const { name, value } = e.target;
    setUpdatePassForm({
      ...updatePassForm,
      [name]: value,
    });
  };

  const submitUpdatePass = async (e) => {
    e.preventDefault();
    const { currentPassword, password, confirmPassword } = updatePassForm;

    if (confirmPassword !== password) {
      return toast.error("Password does not match");
    }
    const { status, message } = await updatePassword({
      currentPassword,
      password,
    });
    console.log(status, message);
    toast[status](message);
    setUpdatePassForm(initialState);

    status === "success" && navigate("/");
  };

  useEffect(() => {
    const u = JSON.parse(sessionStorage.getItem("user"));
    setUser(u);
  }, []);
  return (
    <DashboardLayout>
      <Modal show={showPassForm} onHide={() => setShowPassForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3">
            <Form onSubmit={submitUpdatePass}>
              <Form.Group className="mb-3">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  name="currentPassword"
                  placeholder="Enter your current password"
                  value={updatePassForm.password}
                  onChange={handleOnPassChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter a password"
                  value={updatePassForm.password}
                  onChange={handleOnPassChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={updatePassForm.password}
                  onChange={handleOnPassChange}
                />
              </Form.Group>
              <Button variant="success" type="submit">
                Update Password
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      <Container>
        <Row className="p-5">
          <Col md={8}>
            <div className="profile-left">
              <ul>
                <li>
                  <strong>Profile ID:</strong>
                  {user?._id}
                </li>
                <li>
                  <strong>Name:</strong>
                  {`${user?._fName} ${user?.lName}`}
                </li>
                <li>
                  <strong>Email:</strong>
                  {user?.email}
                </li>
                <li>
                  <strong>Status</strong>

                  <span
                    className={
                      user?.status === "active" ? "text-success" : "text-danger"
                    }
                  >
                    user?.status
                  </span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="d-flex flex-column gap-4">
            <Button variant="warning">Edit Details</Button>
            <Button variant="warning" onClick={() => setShowPassForm(true)}>
              Update Password
            </Button>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};

export default Profile;
