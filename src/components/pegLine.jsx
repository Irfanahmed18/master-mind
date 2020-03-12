import React from 'react';
import Peg from "./peg";

const PegLine = (props) => {
    return (
        <>
            {
                props.lineValue ? props.lineValue.map((val, index) => <Peg key = {index} displayValue={val}/>) : null
            }

        </>
    )
};

export default PegLine;