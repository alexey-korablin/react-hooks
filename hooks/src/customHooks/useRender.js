import { useRef } from 'react';

export const useRender = () => {
    const renders = useRef(0);
    console.log('rendered', renders.current++);
    return renders;
}