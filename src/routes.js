import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn'; 
import Main from './pages/Main';

export default function src() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/dev/:id' component={Main} />
        </Switch>
        </BrowserRouter>
    )
}
