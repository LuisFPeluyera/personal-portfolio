import React from "react";
import '../styles/Projects.css'
import ProjectDisplay from "./ProjectDisplay";
import ProjectItem from "../components/ProjectItem";
import CoffeeShop from "../assets/blueBeanCoffeeShop.png";
import HeyWeather from "../assets/heyWeather.png";
import NotFound from "../assets/image_not_found.png";


export default function Projects() {
    return <div className="project">
        <h1>My Projects</h1>
        <div className="projectList">

            <ProjectItem name="Hey Weather" image={HeyWeather} />
            <ProjectItem name="Blue Bean Coffee Shop"  image={CoffeeShop} />
            <ProjectItem name="Movie Time"  image={NotFound} />
            <ProjectItem name="Another React Project"  image={NotFound} />

        </div>
    </div>
}