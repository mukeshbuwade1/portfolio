import React from "react";
import CommonBoxComp from "../components/CommonBoxComp";
import SecondaryHeader from "../components/SecondaryHeader";


let ProjectData = [
    {
        projectName: "ACEUSS",
        roleTitle: "UI Designer & Developer",
        projectLink: "",
        description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"

    },
    {
        projectName: "NRT SMS",
        roleTitle: "UI Designer & Developer",
        projectLink: "",
        description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        image: "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_403,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Website_Mockup.jpg"

    },
]

const Projects = () => {
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"PROJECTS"} />
                <div style={{ width: "85%", marginBottom: "3rem" }} >
                    <p style={{ textAlign: "center", fontWeight: "100" }}>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add own content and make changes to the
                        font. I{"’"}m a great place for you to tell a story and let your users know a little more about
                        you.
                    </p>
                </div>

                {
                    ProjectData?.map((item, index) => {
                        return (
                            <CommonBoxComp>
                                <div className="project_container">
                                    <div className="project_container_left_view">
                                        <div  className="project_headline">
                                            <h3 className="project_title">{item.projectName}</h3>
                                            <p className="project_role">{item.roleTitle}</p>
                                        </div>
                                        <div style={{ marginTop: "50px", padding: "0 2rem" }}>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="action_Container">
                                            <a className="action_btn" href="#">Demo</a>
                                            <a className="action_btn" href="#">GitHub</a>
                                        </div>
                                    </div>
                                    <div className="project_container_right_view">
                                        <img src={item.image} alt="project image" width={"100%"} height={"100%"} />
                                    </div>
                                </div>
                            </CommonBoxComp>
                        )
                    })
                }


            </div>
        </div >
    )
}
export default Projects;