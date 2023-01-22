import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { loginSuccess, logoutSuccess } from "../redux/user/UserSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
  };

  return (
    <Navbar bg="warning" expand="md">
      <Container>
        <Navbar.Brand href="#home">Library System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            {userInfo?._id ? (
              <>
                <div className="d-flex gap-2">
                  <h5>Welcome Back {userInfo?.fName}</h5>
                  <Link to="/" onClick={() => handleLogout()}>
                    Logout
                  </Link>
                </div>
              </>
            ) : (
              <>
                <NavLink to="/login" className="mx-3">
                  Login
                </NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
