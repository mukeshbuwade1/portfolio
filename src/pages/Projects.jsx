import React from "react";
import CommonBoxComp from "../components/CommonBoxComp";
import SecondaryHeader from "../components/SecondaryHeader";


let ProjectData = [
    {
        projectName: "Project name 01",
        roleTitle: "Role Title",
        discription: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&w=1000&q=80"

    },
    {
        projectName: "Project name 02",
        roleTitle: "Role Title",
        discription: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
        image: "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_403,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Website_Mockup.jpg"

    },
]

const Projects = () => {
    return (
        <div id="basecontainer">
            <div className="mainViewForResume">
                <SecondaryHeader title={"PROJECTS"} />
                <div style={{width:"85%", marginBottom:"3rem"}} >
                    <p style={{textAlign:"center",fontWeight:"100"}}>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add own content and make changes to the
                        font. I’m a great place for you to tell a story and let your users know a little more about
                        you.
                    </p>
                </div>

                {
                    ProjectData?.map((item, index) => {
                        return (
                            <CommonBoxComp>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                                    <div style={{ width: "60%", }}>
                                        <div style={{ borderLeft: "0.4rem solid", marginTop: "2rem", padding: "0 1.6rem" }}>
                                            <h3 style={{color:"#de954b"}}>{item.projectName}</h3>
                                            <p style={{ fontWeight: "500" }}>{item.roleTitle}</p>
                                        </div>
                                        <div style={{ marginTop: "50px", padding: "0 2rem" }}>
                                            <p>{item.discription}</p>
                                        </div>
                                    </div>
                                    <div style={{ width: "40%" }}>
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