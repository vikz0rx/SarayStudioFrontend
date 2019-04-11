import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './containers/NotFound';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import './style/reset.css';
import './style/style.scss';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route component={NotFound} />
    </Switch>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));