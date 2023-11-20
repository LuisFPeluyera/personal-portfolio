import React from "react";

export default function About() {
    return(
        <div>
            <h1>About</h1>

            <div className="skills">
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJs, Redux, NPM, HTML, CSS, Bootstrap, JQuery</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Java, Spring Boot, ...</span>
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

