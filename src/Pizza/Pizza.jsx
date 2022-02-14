import React from "react";
import './component.css';
import Slices from "./Slices/Slices";

const Pizza = ({ pizzaEatersPersonsCount }) => {
    return <div className="pizza-container">
        <div className="pizza">
            <div className="tomato"></div>
            <div className="olives"></div>
            <div className="pepperonis"></div>
            <div className="pepper"></div>
            <div className="basil"></div>
            <Slices pizzaEatersPersonsCount={pizzaEatersPersonsCount}/>
        </div>
    </div>;
}

export default Pizza;