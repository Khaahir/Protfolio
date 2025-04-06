import React from "react";
import "../sassFiles/Home/Home.scss";
import MenuBtn from "../components/menuBtn";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="home-container">
        <header>
          <div className="header-container">
            <span className="home-motto">Family,Code,Roll,Run,Repeat</span>
            <MenuBtn />
          </div>
        </header>

        <main>
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
          <Link to={"/portfolio"}>
            <button>Portfolie</button>
          </Link>
        </main>
        <footer className="footer-container">
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
          <span className="footer-text">
            “Fullstack. focused. Curious. Consistent.”
          </span>
        </footer>
      </section>
    </>
  );
}
