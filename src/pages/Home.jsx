import React from "react";
import '../styles/Home.css'
import {GitHub} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Email} from "@mui/icons-material";

export default function Home() {
    return (
        <div className="home">
          <div className="about" >
            <h2>Hi, I'm Luis</h2>
            <div className="prompt">
                <p>Accomplished Army veteran and future Senior Web Developer</p>
                <LinkedIn />
                <GitHub />
                <Email />
            </div>
          </div>
          <div className="skills">
              <ol className="list">
                  <li className="item">
                      <h2>Front-End</h2>
                      <span>ReactJs, Redux, NPM, HTML, CSS, Bootstrap, JQuery</span>
                  </li>
                  <li className="item">
                      <h2>Back-End</h2>
                      <span></span>
                  </li>
                  <li className="item">
                      <h2>Languages</h2>
                      <span>Javascript, Java, Solidity, Python</span>
                  </li>
              </ol>
          </div>
        </div>

    );

}