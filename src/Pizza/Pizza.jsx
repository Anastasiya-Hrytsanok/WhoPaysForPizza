import React from "react";
import './component.sass';
import Slices from "./Slices/Slices";

const Pizza = ({ pizzaEatersCount, orderDetails }) => {
    return <div className="pizza-container">
        <div className="pizza">
            <div className="tomato"></div>
            <div className="olives"></div>
            {orderDetails.type === 'meat' && <div className='pepperonis'></div>}
            <div className="pepper"></div>
            <div className="basil"></div>
            <Slices pizzaEatersCount={pizzaEatersCount}/>
        </div>
    </div>;
}

export default Pizza;