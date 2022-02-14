import React from "react";
import './component.css';
import Slice from "./Slice/Slice";

const calculateDegrees = (pizzaEatersPersonsCount) => {
    let angleStep = 360 / pizzaEatersPersonsCount;
    const result = [];

    for (let i = 1; i <= pizzaEatersPersonsCount / 2; i++) {
        result.push(angleStep * i);
    }

    return result;
}

const Slices = ({ pizzaEatersPersonsCount }) => {
    return <div className="slices">
        {calculateDegrees(pizzaEatersPersonsCount).map((item) => <Slice deg={item} key={item}/>)}
    </div>
}

export default Slices;