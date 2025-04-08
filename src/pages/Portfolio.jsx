import React from "react";
import "../sassFiles/Portfolio/Portfolio.css";
import "../sassFiles/CustumBtn/CustumBtn.css";
import Button from "../components/cutomBtn";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/menuSlice";
import Social from "../components/social";

function Portfolio() {
  const dispatch = useDispatch();
  return (
    <section className="portfolio-container">
      <Button variant={"menu"} onClick={() => dispatch(toggleMenu())}>
        <img className="btn-menu" src="src/assets/menu.png" alt="menu button" />
      </Button>
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
        <Social />
        <span className="footer-text">
          “Fullstack. focused. Curious. Consistent.”
        </span>
      </footer>
    </section>
  );
}

export default Portfolio;
