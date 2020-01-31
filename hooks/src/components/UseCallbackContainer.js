import React, {useState, useCallback } from 'react';

import { UseCallbackHook } from './UseCallbackHook'

export const UseCallbackContainer = () => {
    const [counter, setCounter] = useState(0);

    const nums = [1, 6, 0, 8];

    const increment = useCallback(
        (n=1) => { 
            setCounter(c => c + n); 
        }, [setCounter]);

    return (
        <div>
            <UseCallbackHook increment={increment}/>
            <span>Count: {counter}</span>
            {nums.map(n => (<UseCallbackHook increment={increment} n={n} key={n} />))}
        </div>
    );
};