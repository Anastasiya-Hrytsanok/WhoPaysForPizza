import React from "react";
import './component.css';

const LoadButton = ({ onClick }) => {
    // if (error) {
    //     return <div>Ошибка: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Загрузка...</div>;
    //   } else {
    return <>
        <button onClick={onClick} id="load-btn">Load party</button>
        <div id="app">
            <p>Click 👆 this button</p>
        </div>
    </>
}

export default LoadButton;  