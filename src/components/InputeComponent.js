import React from "react";

const InputeComponent = (props) => {
    return (
        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", width: { ...props.inputBoxStyle } }}>
            <label style={{ fontSize: "14px", fontWeight: "600", color: "#c5905a" }}>{props.title}</label>
            <input
                style={{ height: "30px", border: "none", outline: "none ", borderBottom: "1px solid black", }}
                placeholder={props.placeholder ?? ""}
                value={props.value ?? ""}
                onChange={props.onChange}
                type={props?.type?? "text"}
                name={props.name}
                required={props?.required? true:false}
            />            
        </div>
    )
}
export default InputeComponent