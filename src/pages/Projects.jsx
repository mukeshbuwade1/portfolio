import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommonBoxComp from "../components/CommonBoxComp";
import Loader from "../components/Loader";
import SecondaryHeader from "../components/SecondaryHeader";
import { db } from "../firebase/firebase-config";
import { updateProjects } from "../redux/projectSlice";
import ProjectData from "../temp_data/projects";

const Projects = () => {
    const projectCollectionRef = collection(db, "projects")
    const [projects, setProjects] = useState(ProjectData);
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const redux_projects = useSelector((state) => state.projects)

    async function getProjects() {
        setLoading(true)
        try {
            const data = await getDocs(projectCollectionRef)
            const create_data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            dispatch(updateProjects(create_data))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (redux_projects) setProjects(redux_projects)
        else getProjects()
    }, [redux_projects])


    return (
        <div id="basecontainer">
            {loading ? <Loader /> : null}
            <div className="mainViewForResume">
                <SecondaryHeader title={"PROJECTS"} />
                <div style={{ width: "85%", marginBottom: "3rem" }} >
                    {/* <p style={{ textAlign: "center", fontWeight: "100" }}>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                        Just click “Edit Text” or double click me to add own content and make changes to the
                        font. I{"’"}m a great place for you to tell a story and let your users know a little more about
                        you.
                    </p> */}
                </div>

                {
                    projects?.map((item, index) => {

                        return (
                            <CommonBoxComp key={index}>
                                <div className="project_container">
                                    <div className="project_container_left_view">
                                        <div className="project_headline">
                                            <h3 className="project_title">{item.name}</h3>
                                            <p className="project_role">{item.role}<span className="role-tooltip" >(role)</span></p>
                                        </div>
                                        <div style={{ marginTop: "20px", padding: "0 2rem" }}>
                                            <p>{item.description}</p>
                                            <div className="tech-info">
                                                {
                                                    item?.tech?.map((e, i) => <p key={i} className="tech">{i == 0 ? "" : ", "}#{e}</p>)
                                                }
                                            </div>
                                        </div>
                                        <div className="action_Container mt-10">
                                            <a
                                                //  className="action_btn " 
                                                target={"_blank"} rel="noopener"
                                                href={item.demo_link ?? "#"}> <button style={item.demo_link ? {} : { backgroundColor: "#d9c6b4", borderColor: "#d9c6b4" }}>Demo</button></a>
                                            <a target={"_blank"} rel="noopener" href={item.github_link ?? "#"}> <button style={item.demo_link ? {} : { backgroundColor: "#d9c6b4", borderColor: "#d9c6b4" }}>GitHub</button></a>
                                        </div>
                                    </div>
                                    <div className="project_container_right_view">
                                        <img src={item.front_image} alt="project image" width={"100%"} height={"100%"} />
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