import React from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
    
    const navigate = useNavigate()
    return <button  onClick={(event) => {
        props.onClick(event, navigate)
    }}>{props.name}</button>
}

export default Button