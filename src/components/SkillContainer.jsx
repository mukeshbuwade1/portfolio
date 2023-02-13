import React from 'react'

export default function SkillContainer({ title, arr }) {
    return (
        <div style={{marginTop:"30px"}}>
            <h2 className="skill__title">{title}</h2>
            <div className="skill_list_container">
                {
                    arr.map(e => (
                        <div className="skill_tx_box" key={e}>
                            <p className="skill_tx">{e}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
