import React from "react";
import "../sassFiles/Tools/Tools.css";
import Button from "../components/cutomBtn";
import "../sassFiles/CustumBtn/CustumBtn.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/menuSlice";
import Social from "../components/social";

function Tools() {
  const dispatch = useDispatch();
  return (
    <section className="tools-container">
      <header className="tools-navi">
        <a
          className="download"
          href="public/cv.webp"
          download={"public/cv.webp"}
        >
          <Button variant={"download"}>Download my cv</Button>
        </a>
        <Button variant={"menu"} onClick={() => dispatch(toggleMenu())}>
          <img
            className="btn-menu"
            src="src/assets/menu.png"
            alt="menu button"
          />
        </Button>
        <h1 className="tools-title">Tools & Technologies</h1>
      </header>
      <main>
        <ul className="tools-list">
          <li>HTML5, CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>Agile methods</li>
          <li>Redux</li>
        </ul>
      </main>
      <footer className="footer-container">
        <Social />
        <span className="footer-text">
          “Fullstack. focused. Curious. Consistent.”
        </span>
      </footer>
    </section>
  );
}

export default Tools;
