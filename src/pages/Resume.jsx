import React from "react";
import Experionce from "../components/Experience";
import SecondaryHeader from "../components/SecondaryHeader";

const Resume = () => {
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title = {"RESUME"}/>
                <div className="btnContainer" >
                    <p className="Experience">Experience</p>
                    <button >
                        Dowanload CV
                    </button>
                </div>
                <Experionce
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