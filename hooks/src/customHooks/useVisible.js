import { useState } from 'react';

export const useVisible = () => {
    const [values, setValues] = useState({});

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