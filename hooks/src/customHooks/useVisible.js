import { useState } from 'react';

export const useVisible = () => {
    const [values, setValues] = useState({'useState': false, 'useEffect': false});

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