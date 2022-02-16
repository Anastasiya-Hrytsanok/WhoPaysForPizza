import React from "react";
import './component.sass';
import Slice from "./Slice/Slice";
import { calculateDegrees } from './utils';

const Slices = ({ pizzaEatersCount }) => {
    return <div className="slices">
        {calculateDegrees(pizzaEatersCount).map((item) => <Slice deg={item} key={item}/>)}
    </div>
}

export default Slices;