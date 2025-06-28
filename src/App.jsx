import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader"; // adjust path as needed
import Footer from "./components/Footer";
// Import your page components
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Contact from "./pages/Contact";

import Testimonials from "./pages/Testimonials";
import Gallery from "./components/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import CodeSewaFooter from "./components/CodeSewaFooter";
import WhatsAppButton from "./components/WhatsAppButton";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavHeader />
        <main className="mt-[36px] overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <CodeSewaFooter />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
