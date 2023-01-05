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

const Resume = () => {
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"RESUME"} />
                <div className="btnContainer" >
                    <p className="Experience">Experience</p>
                    <NavLink to="/login">
                        <button >
                            Dowanload CV
                        </button>
                    </NavLink>
                </div>
                <Experience
                    company_logo={"../images/nrt-logo.png"}
                    time={"Oct2021 - Present"}
                    position={"Jr. React Native Developer"}
                    componyName={"NewRise Technosys Pvt Ltd"}
                    location={"Bhopal (MP), India"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />

                 {/* -------------------internship section ----------------- */}
                 <div className="btnContainer" >
                    <p className="Experience">Internship</p>
                </div>

                <Experience
                    time={"2017 - 2021"}
                    position={"Full Stack Development"}
                    componyName={"HPE Education Service"}
                    location={"Bhopal"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />

                {/* -------------------education section ----------------- */}
                <div className="btnContainer" >
                    <p className="Experience">Education</p>
                </div>

                <Experience
                    time={"2017 - 2021"}
                    position={"Bachelor of Technology"}
                    componyName={"Computer Science and Engineering"}
                    location={"RGPV University, Bhopal"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />

                <Experience
                    time={"2015 - 2017"}
                    position={"12TH"}
                    componyName={"Maths(Science)"}
                    location={"M.P. Board"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />

                <Experience
                    time={"2013 - 2015"}
                    position={"10TH"}
                    componyName={"All Subject"}
                    location={"M. P. Board"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />

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