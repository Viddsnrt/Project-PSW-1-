import React from 'react';
import './Home.css';
import Footer from './Footer';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar or Header */}
      <header className="menu">
        <h3>Kimia</h3>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Chemical Reactions <br /> Every Day
          </h1>
          <p className="hero-text">
            Explore the world of chemistry <br /> and enhance your understanding tomorrow with <span>chimiLearn</span>
          </p>
          <button className="cta-button">Start Learning</button>
        </div>
        <figure className="hero-image">
          <img
            src="https://png.pngtree.com/background/20230616/original/pngtree-atomic-level-molecular-structure-in-3d-rendering-ideal-for-medical-backgrounds-picture-image_3666984.jpg"
            alt="stoichiometry reactions"
          />
        </figure>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Why Learn Chemistry?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-atom"></i>
            <h3>Interactive Lessons</h3>
            <p>Engage with dynamic and hands-on learning materials.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-flask"></i>
            <h3>Real Experiments</h3>
            <p>Simulate real-life chemical reactions from anywhere.</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-microscope"></i>
            <h3>Expert Guidance</h3>
            <p>Learn from the best in the field with easy-to-follow guides.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join the ChimiLearn Community!</h2>
        <p>Start your journey into the fascinating world of chemistry today.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
