import React from "react";
import './component.sass';

const Slice = ({ deg }) => {
    return <div className='slice' style={{transform: `rotate(${deg}deg)`}}></div>
}

export default Slice;