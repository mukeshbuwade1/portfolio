import React from "react";
import logo from "../images/user.jpeg"
import { LinkedIn, Facebook, WhatsApp, Instagram } from "@material-ui/icons"
import { Link } from "react-router-dom";



const About = () => {
    function externalLink() {
        alert("opps")
    }
    return (
        <div className="aboutCountainer">
            <div className="absolutebg" ></div>
            <div className="mainView">
                <div className="leftView">
                    <div className="userImageContainer">
                        <img src={logo} alt="Logo" className="userImage" />;
                    </div>
                    <h3 style={{ fontSize: "30px", lineHeight: "35px", margin: "20px 0" }}>Mukesh Buwade</h3>
                    <hr className="hr" />
                    <p className="role">Front End Developer</p>
                    <p className="skills">React Native(Android)||React JS</p>
                    <div className="socialIconContainer">
                        <div className="iconBox">
                            <a className="social-icon" href="https://www.linkedin.com/in/mukesh-buwade-278476197/" target="_blank" rel="noopener noreferrer"> <LinkedIn /></a>
                            <a className="social-icon" href="https://www.facebook.com/om.buwade/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                            <a className="social-icon" href="https://api.whatsapp.com/send?phone=919770675479&text=Hello" target="_blank" rel="noopener noreferrer"> <WhatsApp /></a>
                            <a className="social-icon" href="https://instagram.com/mr.mukesh_4?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                            </div>
                    </div>
                </div>
                <div className="rightView">
                    <h1 className="hello">Hello</h1>
                    <h3 className="subline">Here's who I am & what I do</h3>
                    <div className="home_btn_container">
                        <Link to={"/resume"}>
                        <button > RESUME </button>
                        </Link>
                        <Link to={"/projects"}>
                        <button > PROJECTS </button>
                        </Link>
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: "100", textAlign: "justify" }}> I have several years experience in Computer Literacy, currently I am studying my A-Levels. My goal is to be able to apply myself and get the best grades possible while doing so. If I do not know how to solve a problem or get something done, it will be my privilege to learn how to find the solution and get it done
                    </p>
                </div>
            </div>

        </div>
    )
}
export default About;