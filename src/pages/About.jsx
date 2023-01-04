import React from "react";
import logo from "../images/user.jpeg"
import { LinkedIn, Facebook, WhatsApp, Instagram } from "@material-ui/icons"



const About = () => {
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
                            <LinkedIn />
                            <Facebook />
                            <WhatsApp />
                            <Instagram />
                        </div>
                    </div>
                </div>
                <div className="rightView">
                    <h1 className="hello">Hello</h1>
                    <h3 className="subline">Here's who I am & what I do</h3>
                    <div className="home_btn_container">
                        <button > RESUME </button>
                        <button > PROJECTS </button>
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: "100",textAlign:"justify" }}> I have several years experience in Computer Literacy, currently I am studying my A-Levels. My goal is to be able to apply myself and get the best grades possible while doing so. If I do not know how to solve a problem or get something done, it will be my privilege to learn how to find the solution and get it done
                    </p>
                </div>
            </div>

        </div>
    )
}
export default About;