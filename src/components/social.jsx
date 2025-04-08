import React from "react";

function Social() {
  return (
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
  );
}

export default Social;
