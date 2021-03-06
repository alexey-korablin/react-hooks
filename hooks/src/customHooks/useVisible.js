import { useState } from 'react';

export const useVisible = () => {
    const [values, setValues] = useState({
        'useState': false,
        'useEffect': false,
        'useRef': false,
        'useLayoutEffect': false
    });

    return [
        values,
        name => {
            setValues({
                ...values,
                [name]: !values[name],
            })
        }
    ]
}