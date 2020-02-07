import React, { useContext } from 'react';

import { UserContext } from '../components/UseContextHook';

export const About = () => {
    const { value } = useContext(UserContext);

    const { user } = value;

    return (
        <div>
            <h2>The About page</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
        
    )
}