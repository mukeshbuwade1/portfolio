import React from "react";

const InputeComponent = (props) => {
    return (
        <div style={{marginTop:"2rem", display:"flex",flexDirection:"column",width:{...props.inputBoxStyle } }}>
            <label style={{fontSize:"14px",fontWeight:"600"}}>{props.title}</label>
            <input 
            style={{height:"30px",border:"none",outline:"none ",borderBottom:"1px solid black",}}
            placeholder={props.placeholder??""} 
            value={props.value??""}
            onChange={props.onChange}
            />
        </div>
    )
}
export default InputeComponent