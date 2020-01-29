import { useState } from 'react';

export const useForm = (initValue) => {
    const [values, setValues] = useState(initValue);

    return [
        values,
        e => {
            setValues({
                ...values,
                [e.target.name]: e.target.value
            });
        }
    ];
}