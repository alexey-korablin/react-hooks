import React from 'react';

import { UseStateHook } from './components/UseStateHook';
import { UseEffectHook } from './components/UseEffectHook';
import { UseRefHook } from './components/UseRefHook';
import { UseLayoutEffectHook } from './components/UseLayoutEffectHook';
import { UseCallbackContainer } from './components/UseCallbackContainer';

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
          {visibilities['useEffect'] && <UseEffectHook isVisible={visibilities['useEffect']}/>}
        </li>
        <li>
          <h2>useRef hook examples</h2>
          <button onClick={() => {handleClick('useRef')}}>Show example</button>
          {visibilities['useRef'] && <UseRefHook isVisible={visibilities['useRef']}/>}
        </li>
        <li>
          <h2>useLayoutEffect hook examples</h2>
          <button onClick={() => {handleClick('useLayoutEffect')}}>Show example</button>
          {visibilities['useLayoutEffect'] && <UseLayoutEffectHook isVisible={visibilities['useLayoutEffect']}/>}
        </li>
        <li>
          <h2>useCallback hook examples</h2>
          <button onClick={() => {handleClick('useCallback')}}>Show example</button>
          {visibilities['useCallback'] && <UseCallbackContainer/>}
        </li>
      </ul>
    </>
  );
}

export default App;
