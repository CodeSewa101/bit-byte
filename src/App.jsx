import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader"; // adjust path as needed
import Footer from "./components/Footer";
// Import your page components
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import Instructor from "./pages/Instructor";
import Testimonials from "./pages/Testimonials";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        <NavHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
