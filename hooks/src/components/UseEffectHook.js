import React from 'react';

export const UseEffectHook = ({ isVisible }) => (
    <div style={{ display: `${isVisible ? 'block' : 'none'}` }}>
        <h2>UseEffectHook will be here</h2>
    </div>
);