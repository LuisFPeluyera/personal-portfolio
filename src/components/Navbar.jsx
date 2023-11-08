import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
   const [ expandNavbar, setExpandNavbar ] = useState(false);
   const location = useLocation();

   useEffect(()=>{
       setExpandNavbar(false)
       console.log("useEffect worked");
   },[location])



    return (
        <div className="navbar" id={ expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={()=>{
                    setExpandNavbar(!expandNavbar);
                    console.log(expandNavbar);
                }} >
                    <MenuIcon />
                </button>
            </div>
            <div className="links">
                <Link  to="/"> Home </Link>
                <Link  to="/about" > About Me </Link>
                <Link  to="/projects"> Projects </Link>
                <Link  to="/contact" > Contact Me </Link>
            </div>



        </div>
    )
}