import React from "react";

function Input(props) {
    return <input onChange={(event)=>{ props.onChange(event.target.value) }}  value={props.value} type={props.type} placeholder={props.placeholder}></input>
}

export default Input