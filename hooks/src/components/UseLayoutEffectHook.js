import React, { useRef, useLayoutEffect, useState } from 'react';

import { useForm } from '../customHooks/useForm';
import { useFetch } from '../customHooks/useFetch';

// TODO: move the function to utils
const getNumber = (x=10) => Math.floor(Math.random() * x);

export const UseLayoutEffectHook = () => {
    const [values, setValues] = useForm({
        userName: '',
        email: '',
        password: ''
    });
    const [measure, setMeasure] = useState({width: 0, height: 0});

    const [counter, setCounter] = useState(getNumber);

    const inputRef = useRef();
    const divRef = useRef();

    useLayoutEffect(() => {
        // Покажет размеры компонента
        console.log(inputRef.current.getBoundingClientRect());
    }, []);

    useLayoutEffect(() => {
        console.log(divRef.current.getBoundingClientRect());
        const {width, height} = divRef.current.getBoundingClientRect();
        setMeasure({width, height});
    }, [counter]);

    // TODO: move the url to constants
    const url = `http://numbersapi.com/${counter}/trivia`;
    const {data, loading} = useFetch(url);

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
            <p>Width of the block above: {measure.width} and its height: {measure.height}</p>
            <button onClick={() => setCounter(prev => prev += getNumber())}>Get number</button>
        </div>
    </div>);
}