import React from "react";
import "../sassFiles/Home/Home.scss";
import { Link } from "react-router-dom";
import Button from "../components/cutomBtn";
import "../sassFiles/CustumBtn/CustumBtn.css";
import Social from "../components/social";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Redux/menuSlice";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <section className="home-container">
        <header className="header-container">
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
        </header>

        <main className="main-container">
          <h2 className=" home-title">Hey!</h2>
          <span className=" about-me">
            I’m Jesper, 28-year-old aspiring JavaScript developer based in
            Kristinehamn, Värmland. I’m currently studying full-stack web
            development, diving deep into modern web technologies. When I’m not
            coding, I’m training Brazilian Jiu-Jitsu, running, or spending time
            with my two kids. I love building clean, functional, user-friendly
            apps—and I’m always hungry to learn more.
          </span>
          <div className="side-line"></div>
          <Link className="portfolie-btn" to={"/portfolio"}>
            <button className="portfolie-btn">Portfolie</button>
          </Link>
        </main>
        <footer className="footer-container">
          <Social />
          <span className="footer-text">
            “Fullstack. focused. Curious. Consistent.”
          </span>
        </footer>
      </section>
    </>
  );
}
