import React, { useEffect, useState } from 'react';

import { useForm } from '../customHooks/useForm';

export const UseEffectHook = () => {
    const [values, setValues] = useForm({ 
                                    independent: '', 
                                    dependent: '',
                                    firstName: '' 
                                });
    const [count, setCount] = useState(0);
    const [{x, y}, setCoords] = useState({ x: 0, y: 0 })

    // Хук эффекта без зависимостей будет отрабатывать при каждом изменении
    // состояния (вызовы setValue). Если же указать зависимости, то эффект
    // будет срабатывать на изменения зависимости
    // Если список зависимостей будет равен пустому массиву, то хук эффекта
    // сработает лишь дважды: на componentDidMount и ComponentWillUnmount
    // Логика очистки, применяемая перед уничтожением компонента 
    // (ComponentWillUnmount) описывается в функции которую может вернуть 
    // хук эффекта. Также эта функция отрабатывает на изменение зависимостей
    useEffect(() => {
        setCount(prev => prev += 1);

        // Clean-up function
        return () => { console.log('Unmounted'); }
    }, [values.dependent, values.firstName]);

    // Компонент может содержать более одного хука эффекта
    useEffect(() => {
        const mouseMoveHandler = (e) => { setCoords({ x: e.x, y: e.y }) };
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
        }
    }, []);

    return (
       <div>
        <p>useEffect hook fired {count} times</p>
        <p>The mouse coordinates. X: {x} and Y: {y}</p>
        <input 
            type='text' 
            name='independent' 
            placeholder='independent'
            value={values.independent} onChange={setValues}
        />
        <input 
            type='text' 
            name='dependent'
            placeholder='dependent' 
            value={values.dependent} onChange={setValues}
        />
        <input 
            type='text' 
            name='firstName'
            placeholder='firstName' 
            value={values.firstName} onChange={setValues}
        />
    </div>
    );
}