import React, { useContext } from 'react';

import { UserContext } from '../components/UseContextHook';
import { login } from '../utils/login';

export const Index = () => {
    const { providerMessage, value } = useContext(UserContext);
    const { message, setMessage } = providerMessage;
    const { user, setUser } = value;

    return (
        <div>
            <h2>The Index page</h2>
            <p>{message}</p>
            <button onClick={() => setMessage('Hey!')}>Change message</button>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? 
                <button onClick={() => {
                        // Call server to logout
                        setUser(null);
                    }}>Logout</button>
                : <button onClick={async () => {
                    const user = await login();
                    setUser(user);
                }}>Login</button>
            }
        </div>
    )
}