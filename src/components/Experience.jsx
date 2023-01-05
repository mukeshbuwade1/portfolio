import React from "react";

const Experience = ({ time, position, componyName, location, description, company_logo }) => {

    return (
        <div className="experienceContainer experienceContainer_d_f-r">
            {/* {
                company_logo
                    ?
                    : null
            } */}
            {/* <img className="company-logo-on-card" src={require("../images/nrt-logo.png")} alt={"company-logo"} width={"100%"} /> */}
            <div className="ComponyInfo">
                <h3 className="card_header">{time}</h3>
                <p className="position">{position}</p>
                <p className="normal_text">{componyName}</p>
                <p className="normal_text">{location}</p>
            </div>
            <div className="RoleInfo">
                <p className="normal_text">{description}</p>
            </div>
        </div>
    )
}
export default Experience