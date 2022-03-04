import React from "react";

const SecondaryHeader = (props) => {
    return (
        <div style={{width:"100%",margin:"30px 0"}}>
            <h1 className="resume">{props.title} </h1>
        </div>
    )
}
export default SecondaryHeader;