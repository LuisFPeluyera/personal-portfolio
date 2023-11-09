import React from "react";
import {GitHub} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Email} from "@mui/icons-material";

export default function Home() {
    return (
        <div className="home">
          <div className="about" >
            <h2>Hi, I'm Luis</h2>
            <div className="prompt"> <p>Accomplished Army veteran and future Senior Web Developer</p></div>
              <LinkedIn />
              <GitHub />
              <Email />
          </div>
          <div className="skills"></div>
        </div>

    );

}