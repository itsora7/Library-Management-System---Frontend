import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register.js";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";

function App() {
  return (
    <div className="">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/books/add" element={<AddBook />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
