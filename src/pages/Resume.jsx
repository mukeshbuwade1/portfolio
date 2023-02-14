import React from "react";
import Experience from "../components/Experience";
import SecondaryHeader from "../components/SecondaryHeader";
import { NavLink } from "react-router-dom";
import SkillContainer from "../components/SkillContainer";

const languages = [
    "JavaScript", "TypeScript", "ECMAScript 6", "HTML5", "CSS6", "PYTHON"
]
const libraries = [
    "React Native", "React JS", "Node JS", "Wordpress", "Shopify",
]
const tools = [
    "Redux", "BitBucket", "Git", "GitHub", "Postman", "Android Studio", 'VS Code', "Canva", "Figma"
]

let experienceArr = [
    {
        image: "../images/nrt-logo.png",
        duration: "Oct,2021 - Present",
        position: "Jr. React Native Developer",
        name: "NewRise Technosys Pvt Ltd",
        location: "Bhopal (MP), India",
        description: `• design and implement user Interface using React Native and JavaScript
        • Build clean UIs across multiple mobile platforms adhering to client specifications
        • Accessing platform-specific APIs using Native Modules
        • Worked with REST API’s and Web-sockets to render dynamic data
        • Simplify Development using Redux, Postman, Bitbucket, and Git`
    }
]
let internshipArr = [
    {
        image: "../images/nrt-logo.png",
        duration: "Feb,2019 - Jul,2019",
        position: "Full Stack Development",
        name: "HPE Education Service",
        location: "Bhopal (MP), India",
        description: `• Full stack development in React Js and python
        • Familiar with web technologies and their fundamentals.
        • Works on technologies like HTML5, CSS3, Bootstrap,
        • JavaScript, react.js, css animations, Responsive design, and Django(Python).`
    }
]
let educationArr = [
    {
        image: "../images/nrt-logo.png",
        duration: "2017 - 2021",
        position: "Bachelor of Technology",
        name: "Computer Science and Engineering",
        location: "RGPV University, Bhopal",
        description: "I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
        image: "../images/nrt-logo.png",
        duration: "2015 - 2017",
        position: "12TH",
        name: "Maths(Science)",
        location: "MP Board, Bhopal, India",
        description: "I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
        image: "../images/nrt-logo.png",
        duration: "2013 - 2015",
        position: "10TH",
        name: "All Subject",
        location: "MP Board, Bhopal, India",
        description: "I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
    }
]

const Resume = () => {
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"RESUME"} />
                <div className="btnContainer" >
                    <p className="Experience">Experience</p>
                    <a href="https://drive.google.com/uc?export=download&id=1vJTuvXpFg4JQ2O9sNKaYHaJvAe8KE6l4">
                        <button >
                            Download CV
                        </button>
                    </a>
                </div>
                {
                    experienceArr.map((e, i) => (
                        <Experience
                            company_logo={e.image}
                            time={e.duration}
                            position={e.position}
                            componyName={e.name}
                            location={e.location}
                            description={e.description}
                        />
                    ))
                }


                {/* -------------------internship section ----------------- */}
                <div className="btnContainer" >
                    <p className="Experience">Internship</p>
                </div>

                {
                    internshipArr.map((e, i) => (
                        <Experience
                            company_logo={e.image}
                            time={e.duration}
                            position={e.position}
                            componyName={e.name}
                            location={e.location}
                            description={e.description}
                        />
                    ))
                }

                {/* -------------------education section ----------------- */}
                <div className="btnContainer" >
                    <p className="Experience">Education</p>
                </div>

                {
                    educationArr.map((e, i) => (
                        <Experience
                            company_logo={e.image}
                            time={e.duration}
                            position={e.position}
                            componyName={e.name}
                            location={e.location}
                            description={e.description}
                        />
                    ))
                }

                {/* -------------------skill section ----------------- */}
                <div className="btnContainer" >
                    <p className="Experience">Professional Skills</p>
                </div>
                <div className="experienceContainer experienceContainer_d_f-c">
                    <SkillContainer
                        title={"Language"}
                        arr={languages}
                    />
                    <SkillContainer
                        title={"Libraries/Frameworks"}
                        arr={libraries}
                    />
                    <SkillContainer
                        title={"Tools"}
                        arr={tools}
                    />
                </div>
            </div>
        </div>
    )
}
export default Resume;