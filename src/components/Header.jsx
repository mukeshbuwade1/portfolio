import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg flex-1 headerCountainer">
            <div class="container-fluid">
                <NavLink className="navbar-brand logoContainer " to="/">Mukesh Buwade</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className={(navData) => navData.isActive ? "activeMenuItems" : "menuItems"} to="/">About me</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className={(navData) => navData.isActive ? "activeMenuItems" : "menuItems"} to="/Resume">Resume</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className={(navData) => navData.isActive ? "activeMenuItems" : "menuItems"} to="/Projects">Projects</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className={(navData) => navData.isActive ? "activeMenuItems" : "menuItems"} to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;