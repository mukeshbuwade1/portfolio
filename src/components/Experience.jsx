import React from "react";

const Experionce = ({ time, position, componyName, location, description, company_logo }) => {

    return (
        <div className="experionceContainer">
            {/* {
                company_logo
                    ?
                    : null
            } */}
             <img className="company-logo-on-card" src={require("../images/nrt-logo.png")} alt={"company-logo"} width={"100%"} />
            <div className="ComponyInfo">
                <h3 className="card_header">{time}</h3>
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