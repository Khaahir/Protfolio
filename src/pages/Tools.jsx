import React from "react";
import "../sassFiles/Tools/Tools.css";
import Button from "../components/cutomBtn";

function Tools() {
  return (
    <section className="tools-container">
      <h1 className="tools-title">Tools & Technologies</h1>
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
      </ul>
    </section>
  );
}

export default Tools;
