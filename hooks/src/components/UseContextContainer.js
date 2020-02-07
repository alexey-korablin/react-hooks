import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { UserContext } from './UseContextHook';
import { Index } from '../pages/Index';
import { About} from '../pages/About';

export const UseContextContainer = () => {
    const [message, setMessage] = useState('Hello from context');
    const [user, setUser] = useState(null);

    const providerMessage = useMemo(() => ({ message, setMessage }), [message, setMessage]);
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about/'>About</Link>
                        </li>
                    </ul>
                </nav>

                <UserContext.Provider value={{providerMessage, value}}>
                    <Route path='/' exact component={Index} />
                    <Route path='/about/' component={About} />
                </UserContext.Provider>
            </div>
        </Router>
    );
}