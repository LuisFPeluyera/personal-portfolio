import React from "react";
import '../styles/Home.css'
import {GitHub} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Email} from "@mui/icons-material";
import Me from '../assets/me.jpg'

export default function Home() {
    return (
        <div className="home">
          <div className="about" >
            <h2>Hi, I'm Luis</h2>
            <div className="prompt">
                <p>An Army veteran with a Top Secret/SCI clearance and a passion for bridging languages and building immersive web experiences. Fluent in Spanish, English, Javascript and Java, I bring a 4D perspective to the world of full-stack web development.</p>
                <LinkedIn />
                <GitHub />
                <Email />
            </div>
          </div>
          <aside>
              <img src={Me} alt=""/>
          </aside>
        </div>

    );

}