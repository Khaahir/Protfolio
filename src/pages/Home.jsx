import React from "react";
import "../sassFiles/Home/Home.scss";
import { Link } from "react-router-dom";
import Button from "../components/menuBtn";

export default function Home() {
  return (
    <>
      <section className="home-container">
        <header className="header-container">
            <span className="home-motto">Family,Code,Roll,Run,Repeat</span>
              <Button variant={"menu"} ><img  className="btn-menu" src="src/assets/menu.png" alt="menu button" /></Button>
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
    </>
  );
}
