import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Routes from './enums/routes';
import Home from "./screens/Home/Home";

export const history = createBrowserHistory();

export default () => (
    <Router history={history}>
    <Switch>
        <Route path={Routes.HOME} component={Home} />
    </Switch>
        </Router>
)
