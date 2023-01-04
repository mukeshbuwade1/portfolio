import React from "react";

function Login(props) {
    const { fname } = props;
    // const fname = props.fname
    return (
        <>
            <div>
                <form action="">
                    <h1 style={{maginTop:"100px"}}>Login</h1>
                    <p>{fname}</p>
                    <a onClick={() => console.log("ok mukesh")}>abc</a>
                    <div > </div>
                </form>

            </div>
        </>
    )
}
export default Login