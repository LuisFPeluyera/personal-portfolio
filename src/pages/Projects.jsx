import React from "react";
import '../styles/Projects.css'
import ProjectDisplay from "./ProjectDisplay";
import ProjectItem from "../components/ProjectItem";
import ImageNotFound from "../assets/image_not_found.png";


export default function Projects() {
    return <div className="project">
        <h1>My Projects</h1>
        <div className="projectList">

            <ProjectItem name="Social Media Website" image="https://via.placeholder.com/300x400" image={ImageNotFound} />
            <ProjectItem name="Another Social Media Website" image="https://via.placeholder.com/300x400" image={ImageNotFound} />

        </div>
    </div>
}