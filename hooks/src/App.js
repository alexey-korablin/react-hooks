import React from 'react';
import { UseStateHook } from './components/UseStateHook';
import { UseEffectHook } from './components/UseEffectHook';
import { useVisible } from './customHooks/useVisible';

const  App = () => {
  const [visibilities, handleClick] = useVisible();

  return (
    <>
      <h1>Examples</h1>
      <ul>
        <li>
          <h2>useState hook examples</h2>
          <button onClick={() => {handleClick('useState')}}>Show example</button>
          <UseStateHook isVisible={visibilities['useState']}/>
        </li>
        <li>
          <h2>useEffect hook examples</h2>
          <button onClick={() => {handleClick('useEffect')}}>Show example</button>
          <UseEffectHook isVisible={visibilities['useEffect']}/>
        </li>
      </ul>
    </>
  );
}

export default App;
