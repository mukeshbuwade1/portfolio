import React from 'react'

function Education({time,position,componyName,location}) {
    return (
        <div className="experienceContainer experienceContainer_d_f-r">
            <div >
                <p className="position">{position}</p>
                <p className="normal_text">{componyName}</p>
                <h3 className="card_header">{time}</h3>
                <p className="normal_text">{location}</p>
            </div>
        </div>
    )
}

export default Education