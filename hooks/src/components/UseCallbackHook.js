import React from 'react';

import { useRender } from '../customHooks/useRender';

export const UseCallbackHook = React.memo(({ increment, n }) => {
    const renderCount = useRender();

    return (<>
    {
        n === undefined ? 
            <div>
                <button onClick={increment}>Increment</button>
                <p>The component has rendered {renderCount.current} time</p>
            </div>
            :
            <button onClick={() => increment(n)}>{n}</button>
    }
    </>);
})