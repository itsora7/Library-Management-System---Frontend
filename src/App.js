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
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <div className="">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Books /> : <Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/books"
            element={isLoggedIn ? <Books /> : <Login />}
          ></Route>
          <Route
            path="/books/add"
            element={isLoggedIn ? <AddBook /> : <Login />}
          ></Route>
          <Route
            path="/mybooks"
            element={isLoggedIn ? <MrBooks /> : <Login></Login>}
          ></Route>
          <Route
            path="/transactions"
            element={isLoggedIn ? <Transaction /> : <Login />}
          ></Route>
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Login />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
