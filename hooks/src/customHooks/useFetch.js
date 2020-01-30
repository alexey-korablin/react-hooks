import { useEffect, useState } from 'react';

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        setState({ data: null, loading: true });
        fetch(url)
            .then(t => t.text())
            .then(t => setState({ data: t, loading: false }));
    }, [url])

    return state;
}