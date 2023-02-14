import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Experience from "../components/Experience";
import Loader from "../components/Loader";
import SecondaryHeader from "../components/SecondaryHeader";
import SkillContainer from "../components/SkillContainer";
import { db } from "../firebase/firebase-config";
import { updateResumeData } from "../redux/resumeSlice";
import { languages, libraries, tools, experience, internship, education } from "../temp_data/resume"

const Resume = () => {
    const projectCollectionRef = collection(db, "resume")
    const [resumeData, setResumeData] = useState({languages, libraries, tools, experience, internship, education});
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()
    const resume_data = useSelector((state) => state.resume)

    async function getResumeData() {
        setLoading(true)
        try {
            const data = await getDocs(projectCollectionRef)
            dispatch(updateResumeData(data.docs[0].data()));
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (resume_data) setResumeData(resume_data)
        else getResumeData()
    }, [resume_data])
    return (
        <div id="basecontainer">
             {loading?<Loader/>:null}
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
                    resumeData?.experience?.map((e, i) => (
                        <Experience
                            key={i}
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
                    resumeData?.internship?.map((e, i) => (
                        <Experience
                            key={i}
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
                    resumeData?.education?.map((e, i) => (
                        <Experience
                            key={i}
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
                        arr={resumeData?.languages??[]}
                    />
                    <SkillContainer
                        title={"Libraries/Frameworks"}
                        arr={resumeData?.libraries??[]}
                    />
                    <SkillContainer
                        title={"Tools"}
                        arr={resumeData?.tools??[]}
                    />
                </div>
            </div>
        </div>
    )
}
export default Resume;