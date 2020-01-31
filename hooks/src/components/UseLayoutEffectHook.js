import React, { useRef, useLayoutEffect, useState } from 'react';

import { useForm } from '../customHooks/useForm';
import { useFetch } from '../customHooks/useFetch';
import { useMeasure } from '../customHooks/useMeasure';

// TODO: move the function to utils
const getNumber = (x=10) => Math.floor(Math.random() * x);

export const UseLayoutEffectHook = () => {
    const [values, setValues] = useForm({
        userName: '',
        email: '',
        password: ''
    });

    const [counter, setCounter] = useState(getNumber);

    // TODO: move the url to constants
    const url = `http://numbersapi.com/${counter}/trivia`;
    const {data, loading} = useFetch(url);

    const inputRef = useRef();
    const [rect, divRef] = useMeasure(data);

    useLayoutEffect(() => {
        // Покажет размеры компонента
        console.log(inputRef.current.getBoundingClientRect());
    }, []);

    return (<div>
        <input
            ref={inputRef} 
            type='text' 
            name='userName' 
            value={values.userName} 
            onChange={setValues}
            placeholder='user name'/>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
            <h3>Fetched data</h3>
            <div ref={divRef}>{loading ? '... data is loading' : data}</div>
            <p>Width of the block above: {rect.width} and its height: {rect.height}</p>
            <button onClick={() => setCounter(prev => prev += getNumber())}>Get number</button>
        </div>
    </div>);
}