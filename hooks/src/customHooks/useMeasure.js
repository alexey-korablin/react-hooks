import { useLayoutEffect, useState, useRef } from 'react';

export const useMeasure = (deps) => {
    const [measure, setMeasure] = useState({width: 0, height: 0});
    const divRef = useRef();

    useLayoutEffect(() => {
        console.log(divRef.current.getBoundingClientRect());
        const {width, height} = divRef.current.getBoundingClientRect();
        setMeasure({width, height});
    }, deps);

    return [measure, divRef];
}