import React from 'react';
import {useNavigate} from "react-router-dom"

function Login(props) {
    const { fname } = props;
    // const fname = props.fname
    const navigate = useNavigate()
    return (
        <>
            <div style={{
              width:"100%",
              height:"100vh",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
            }}>
                <form action="">
                    <h1 style={{maginTop:"100px"}}>Login</h1>
                    <p>{fname}</p>
                    <a onClick={() => {
                        console.log("ok mukesh")
                        navigate("/resume",{state:{name:"mukesh"}})
                        }}>abc</a>
                    <div > </div>
                </form>

            </div>
        </>
    )
}
export default Login