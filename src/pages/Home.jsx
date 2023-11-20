import React from "react";
import '../styles/Home.css'
import {GitHub} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Email} from "@mui/icons-material";
import ImgNotFound from '../assets/image_not_found.png'

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
          <aside>
              <img src={ImgNotFound} alt=""/>
          </aside>
        </div>

    );

}