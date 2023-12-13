import React from "react";

export default function About() {
    return(
        <div>
            <h1>About</h1>

            <div className="skills">
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>HTML, CSS, Javascript, Jquery, Bootstrap</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Java, Spring Boot, MySQL</span>
                    </li>
                    <li className="item">
                        <h2>Exposure</h2>
                        <span>Typescript, Solidity, Python</span>
                    </li>
                </ol>
            </div>
        </div>


    );


}

