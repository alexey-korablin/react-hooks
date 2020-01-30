import React, { useRef } from 'react';

import { useForm } from '../customHooks/useForm';

export const UseRefHook = () => {
    const [values, setValues] = useForm({
        userName: '',
        email: '',
        password: ''
    });

    const inputRef = useRef();

    return (<div>
        <input
            ref={inputRef} 
            type='text' 
            name='userName' 
            value={values.userName} 
            onChange={setValues}
            placeholder='user name'/>
        <input 
            type='email' 
            name='email' 
            value={values.email} 
            onChange={setValues}
            placeholder='e-mail'/>
        <input 
            type='password' 
            name='password' 
            value={values.password} 
            onChange={setValues}
            placeholder='password'/>
        <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>);
}