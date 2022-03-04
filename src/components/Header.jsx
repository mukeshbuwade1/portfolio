import React from "react";
import {
   
    Link
  } from "react-router-dom";


const Header=()=>{
    return(
        <div className="headerCountainer">
            <div className="logoContainer">
                <h1>Mukesh Buwade</h1>
            </div>
            <div className="menuContainer">
                    <Link activeClassName='activeMenuItems' className="menuItems" to="/">About me</Link>
                    <Link activeClassName='activeMenuItems' className="menuItems" to="/resume">Resume</Link>
                    <Link activeClassName='activeMenuItems' className="menuItems" to="/projects">projects</Link>
                    <Link activeClassName='activeMenuItems' className="menuItems" to="/Contact">contact</Link>
                    {/* <a className="menuItems">About me</a>
                    <a className="menuItems">Resume</a>
                    <a className="menuItems">projects</a>
                    <a className="menuItems">contact</a>                     */}
                
            </div>
        </div>
    )
}
export default Header;