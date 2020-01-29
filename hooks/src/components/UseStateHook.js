import React, { useState } from 'react';
import { useForm } from '../customHooks/useForm';

export const UseStateHook = ({isVisible}) => {
  const [count, setCount] = useState(10);
  const [{ count1, count2 }, setCounts] = useState({ count1: 10, count2: 20 });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [values, handleChange] = useForm('');

  return (
    <div style={{ display: `${isVisible ? 'block' : 'none'}` }}>
      <div>
        <h3>State initiated with number</h3>
        <button onClick={() => setCount((prev) => prev += 1)}>+</button>
        <div>{count}</div>
      </div>

      <div>
        <h3>State initiated with object</h3>
        <button onClick={() => setCounts((prev) => ({
            ...prev,
            count1: prev.count1 + 1
          }))}>+</button>
        <div>{count1}</div>
        <div>{count2}</div>
      </div>

      <div>
        <h3>Example with input fields</h3>
        <input 
          type='email'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='password'
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <h3>Example with input fields. Custom hooks used</h3>
        <input 
          type='email'
          value={values.email}
          name='email'
          onChange={handleChange}
        />
        <input 
          type='password'
          value={values.password}
          name='password'
          onChange={handleChange}
        />
      </div>
    </div>
  );
}