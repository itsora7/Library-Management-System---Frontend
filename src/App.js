import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register.js";
import Login from "./pages/Login";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import DashboardLayout from "./components/layout/DashboardLayout";
import MrBooks from "./pages/MrBooks";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboardLayout" element={<DashboardLayout />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/books/add" element={<AddBook />}></Route>
          <Route path="/mybooks" element={<MrBooks />}></Route>
          <Route path="/tranasctions" element={<Transaction />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
