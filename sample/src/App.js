import React from 'react';
import StudentPortal from './pages/StudentPortal';
import './App.css';
import Apply from './pages/Apply';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/UnimaLogo.png" alt="UNIMA Logo" className="logo-img" />
          Webs
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/portal">Student Portal</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portal" element={<StudentPortal />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
}

export default App;
