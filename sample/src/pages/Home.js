import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header className="hero">
        <h1>Welcome to the University of Malawi</h1>
        <p>Empowering the next generation of leaders, innovators, and changemakers.</p>
        <Link to="/apply">
  <button>Apply Now</button>
</Link>

      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          The University of Malawi (UNIMA) is the center of academic excellence in Malawi.
          We offer undergraduate and postgraduate programs aimed at transforming Africa through education.
        </p>
      </section>

      <section className="programs">
        <h2>Our Programs</h2>
        <ul>
          <li>Computer Science</li>
          <li>Information Systems</li>
          <li>Public Health</li>
          <li>Education</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: edisonchazumbwa@gmail.com | Phone: +265 99 555 1995</p>
      </section>

      <footer>
        <p>&copy; 2025 University of Malawi. All rights reserved.</p>
      </footer>
    </div>
  );
}
