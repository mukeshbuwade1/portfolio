import React from "react";

const Experionce = ({ time, position, componyName, location, description }) => {

    return (
        <div className="experionceContainer">
            <div className="ComponyInfo">
                <h3>{time}</h3>
                <p>{position}</p>
                <p>{componyName}</p>
                <p>{location}</p>
            </div>
            <div className="RoleInfo">
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Experionce