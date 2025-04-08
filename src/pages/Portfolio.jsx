import React from "react";
import "../sassFiles/Portfolio/Portfolio.css";
import Button from "../components/cutomBtn";

function Portfolio() {
  return (
    <section className="portfolio-container">
      <header className="portfolio-header">
        <h2 className="portfolio-title">My projects</h2>
      </header>

      <main className="portfolio-main">
        <div className="list-object">
          <img className="project-img" src="/public/obj3.jpg" alt="" />
          <span className="project-text">HELLO</span>
        </div>

        <div className="list-object">
          <img className="project-img" src="/public/obj3.jpg" alt="" />
          <span>HELLO</span>
        </div>
        <div className="list-object">
          <img className="project-img" src="/public/obj3.jpg" alt="" />
          <span>HELLO</span>
        </div>
      </main>

      <footer className="portfolio-footer">
        <div className="social-box">
          <img
            className="footer-social"
            onClick={() =>
              (window.location.href = "mailto: Jesperpersson96@hotmail.se")
            }
            src="/src/assets/email.png"
            alt="email icon"
          />
          <img
            className="footer-social"
            onClick={() => window.open("https://github.com/Khaahir", "_blank")}
            src="/src/assets/github.png"
            alt="github icon"
          />
          <img
            className="footer-social"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jesper-persson-936109329/",
                "_blank"
              )
            }
            src="/src/assets/linkedin.png"
            alt="likedin icon"
          />
          <img
            className="footer-social"
            onClick={() => (window.location.href = "tel:+0701471434")}
            src="/src/assets/telephone.png"
            alt="telephone icon"
          />
        </div>
        <span className="footer-text">
          “Fullstack. focused. Curious. Consistent.”
        </span>
      </footer>
    </section>
  );
}

export default Portfolio;
