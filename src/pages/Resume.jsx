import React from "react";
import Experionce from "../components/Experience";
import SecondaryHeader from "../components/SecondaryHeader";
import { NavLink } from "react-router-dom";

const Resume = () => {
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"RESUME"} />
                <div className="btnContainer" >
                    <p className="Experience">Experience</p>
                    <a href="https://drive.google.com/uc?export=download&id=1vJTuvXpFg4JQ2O9sNKaYHaJvAe8KE6l4">
                        <button >
                            Dowanload CV
                        </button>
                    </a>
                </div>
                <Experionce
                    company_logo={"../images/nrt-logo.png"}
                    time={"Oct2021 - Present"}
                    position={"Jr. React Native Developer"}
                    componyName={"NewRise Technosys Pvt Ltd"}
                    location={"Bhopal (MP), India"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />
                <Experionce
                    time={"Oct2021 - Present"}
                    position={"Jr. React Native Developer"}
                    componyName={"NewRise Technosys Pvt Ltd"}
                    location={"Bhopal (MP), India"}
                    description={"I'm a paragraph. Click here to add your own text and edit me.  It’s easy. Just click “Edit Text” or double click me to add your own content  and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."}
                />
            </div>
        </div>
    )
}
export default Resume;