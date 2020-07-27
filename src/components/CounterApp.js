import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd} style={{width: '55px'}}>+1</button>
            <button onClick={handleSubstract} style={{width: '55px'}}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;
