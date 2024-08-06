import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div></div>
    </Router>
  );
}

export default App;
