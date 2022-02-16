import React from "react";
import './component.css';

const LoadButton = ({ onClick, isLoading = false }) => {
    return <>
        <button onClick={onClick} disabled={isLoading}>Load party</button>
        <p>Click 👆 this button</p>
    </>
}

export default LoadButton;  