import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleDropdown = () => {
    setOpen(!open);
  };
  return (
    <Router>
      <div className="app">
        <header className="head">
          <nav className="navbar">
            <a classname="dropdownMenu" onClick={handleDropdown}>
              Menu
            </a>
            <div>
              <a href="/home">Home</a> | <a href="/about">About</a> |{" "}
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>
        <div className="main">
          {open && (
            <div className="dropdown">
              <div>a</div>
              <div>b</div>
            </div>
          )}

          <Routes>
            <Route path="/home" element={<Home className="content" />}></Route>
            <Route
              path="/about"
              element={<About className="content" />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
