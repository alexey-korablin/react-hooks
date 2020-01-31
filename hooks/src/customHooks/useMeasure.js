import { useLayoutEffect, useState, useRef } from 'react';

export const useMeasure = (data) => {
    const [measure, setMeasure] = useState({width: 0, height: 0});
    const ref = useRef();

    useLayoutEffect(() => {
        const {width, height} = ref.current.getBoundingClientRect();
        setMeasure({width, height});
    }, [data]);

    return [measure, ref];
}