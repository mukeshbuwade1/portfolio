import React, { useEffect, useState } from "react";
import logo from "../images/user.jpeg"
import { LinkedIn, WhatsApp, Instagram, GitHub } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { updateAbout } from "../redux/aboutSlice";
import Loader from "../components/Loader";

const About = () => {
    const projectCollectionRef = collection(db, "about")
    const [about, setAbout] = useState({});
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const redux_about = useSelector((state) => state.about)
    console.log("redux_about", redux_about)
    async function getAbout() {
        setLoading(true)
        try {
            const data = await getDocs(projectCollectionRef)
            dispatch(updateAbout(data.docs[0].data()))
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (redux_about) setAbout(redux_about)
        else getAbout()
    }, [redux_about])
    return (
        <div className="aboutCountainer">
            {loading ? <Loader /> : null}
            <div className="absolutebg" ></div>
            <div className="mainView">
                <div className="leftView">
                    <div className="userImageContainer">
                        <img src={logo} alt="Logo" className="userImage" />;
                    </div>
                    <h3 style={{ fontSize: "30px", lineHeight: "35px", margin: "20px 0" }}>{about?.name ?? "Mukesh Buwade"}</h3>
                    <hr className="hr" />
                    <p className="role">{about?.role ?? "Front End Developer"}</p>
                    <p className="skills">{about?.tech ?? "React Native(Android)||React JS"}</p>
                    <div className="socialIconContainer">
                        <div className="iconBox">
                            <a className="social-icon" href="https://www.linkedin.com/in/mukesh-buwade-278476197/" target="_blank" rel="noopener noreferrer"> <LinkedIn /></a>
                            {/* <a className="social-icon" href="https://www.facebook.com/om.buwade/" target="_blank" rel="noopener noreferrer"><Facebook /></a> */}
                            <a className="social-icon" href="https://github.com/mukeshbuwade1" target="_blank" rel="noopener noreferrer"><GitHub /></a>
                            <a className="social-icon" href="https://api.whatsapp.com/send?phone=919770675479&text=Hello" target="_blank" rel="noopener noreferrer"> <WhatsApp /></a>
                            <a className="social-icon" href="https://instagram.com/mr.mukesh_4?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                        </div>
                    </div>
                </div>
                <div className="rightView">
                    <h1 className="hello">{about?.title ?? "Hello"}</h1>
                    <h3 className="subline">{about?.sub_title ?? `Here's who I am & what I do`}</h3>
                    <div className="home_btn_container">
                        <Link to={"/resume"}>
                            <button > RESUME </button>
                        </Link>
                        <Link to={"/projects"}>
                            <button > PROJECTS </button>
                        </Link>
                    </div>
                    <p style={{ fontSize: "15px", fontWeight: "100", textAlign: "justify" }}>{about?.paragraph}</p>
                </div>
            </div>

        </div>
    )
}
export default About;