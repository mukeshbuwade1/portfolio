import React from 'react';

const Component=(props)=>{
    return(
        <div>
        <h1 style={{color:props.color}}>{props.name}</h1>
        </div>
    )
}
export default Component