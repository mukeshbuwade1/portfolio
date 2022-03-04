import React from "react";
import logo from "../images/user.jpeg"
import { LinkedIn, Facebook, WhatsApp, Instagram } from "@material-ui/icons"



const About = () => {
     
    return (
        <div className="aboutCountainer">
            <div className="absolutebg" >

            </div>
            <div className="mainView">
                <div className="leftView">
                    <div className="userImageContainer">
                        <img src={logo} alt="Logo" className="userImage" />;
                    </div>
                    <h3 style={{ fontSize: "30px", lineHeight: "35px", margin:"20px 0" }}>Mukesh Buwade</h3>
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
                    <div style={{margin:"30px 0"}}>
                        <button > RESUME </button>
                        <button > PROJECTS </button>
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: "100", }}> I'm a paragraph. Click here to add your own text and edit me.
                        It’s easy. Just click “Edit Text” or double click me to add your own content
                        and make changes to the font.
                        <br /><br />
                        I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                </div>
            </div>

        </div>
    )
}
export default About;