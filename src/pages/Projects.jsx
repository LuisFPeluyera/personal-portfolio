import React from "react";
import ProjectDisplay from "./ProjectDisplay";
import ProjectItem from "../components/ProjectItem";


export default function Projects() {
    return <div className="project">
        <h1>My Projects</h1>
        <div className="projectList">
            <ProjectItem name="Social Media Website" />
            <ProjectItem name="Another Social Media Website" />

        </div>
        </div>
}