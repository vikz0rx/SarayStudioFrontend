import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import NotFound from './containers/NotFound';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Stuff from './components/Stuff';
import { store } from './store/configureStore';

import './style/reset.css';
import './style/style.scss';

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/stuff' component={Stuff} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
);

render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'));