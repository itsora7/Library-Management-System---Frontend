import React, { useState } from "react";
import Sidebar from "../Sidebar.js";
import Header from "../Header.js";
import Footer from "../Footer.js";
const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="content"> {children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
