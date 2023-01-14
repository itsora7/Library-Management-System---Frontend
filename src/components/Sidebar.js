import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside>
      <div className="top">
        <img
          src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
          alt="none"
        />
      </div>
      <hr />

      <div className="bottom">
        <ul>
          <p className="title">Main</p>
          <Link to="/books" className="link">
            <i className="fa-solid fa-book-open-reader"></i>
            <span>All Books</span>
          </Link>
          <Link to="/mybooks" className="link">
            <i className="fa-solid fa-book-open-reader"></i>
            <span>My Books</span>
          </Link>
          <Link to="/books/add" className="link">
            <i className="fa-solid fa-book"></i>
            <span>Add Books</span>
          </Link>
          <Link to="/transactions" className="link">
            <i className="fa-solid fa-book-open-reader"></i>
            <span>Transactions</span>
          </Link>
          <p className="title"> User</p>
          <Link to="/profile" className="link">
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
