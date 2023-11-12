import React from "react";
import '../styles/Projects.css'
import ProjectDisplay from "./ProjectDisplay";
import ProjectItem from "../components/ProjectItem";
import CoffeeShop from "../assets/blueBeanCoffeeShop.png";
import HeyWeather from "../assets/heyWeather.png";
import NotFound from "../assets/image_not_found.png";
import {ProjectList} from "../helpers/ProjectList";


export default function Projects() {
    return <div className="project">
        <h1>My Projects</h1>
        <div className="projectList">

            {ProjectList.map((project)=>{
               return <ProjectItem name={project.name} image={project.image} />
            })}



        </div>
    </div>
}