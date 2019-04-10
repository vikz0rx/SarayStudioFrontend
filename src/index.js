import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './assets/NotFound';

import './style/reset.css';
import './style/style.scss';

const App = () => (
    <Switch>
        <Route component={NotFound}/>
    </Switch>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));