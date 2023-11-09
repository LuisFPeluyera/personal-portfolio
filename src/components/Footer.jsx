import React from "react";
import {GitHub} from "@mui/icons-material";
import {LinkedIn} from "@mui/icons-material";
import {Email} from "@mui/icons-material";

export default function Footer(){
    return (
        <div className="footer">
            <div>
                <LinkedIn/>
                <GitHub/>
                <Email/>
            </div>
            <p> &copy; 2023 luisfpeluyera.com</p>
        </div>
    )
}