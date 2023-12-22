import React from "react";
import "../styles/ProjectDisplay.css"
import { useParams, Link } from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import {GitHub} from "@mui/icons-material";
import {Laptop} from "@mui/icons-material";

export default function ProjectDisplay(){
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project" >
            <h1> {project.name}</h1>
            <img src={project.image} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <div className="links">
                {/*TODO START HERE*/}
                <Link to={project.website} >
                    <Laptop />
                </Link>

            </div>

        </div>
    )
}