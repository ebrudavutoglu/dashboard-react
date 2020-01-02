import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {ThroughProvider} from 'react-through';


import AdminLayout from "./layouts/Admin/Admin";

const hist = createBrowserHistory();

ReactDOM.render(
    <ThroughProvider>
        <Router history={hist}>
            <Switch>
                <Route path="/admin" render={props=><AdminLayout {...props} />}/>
                <Redirect from="/" to="/admin/dashboard"/>
            </Switch>
        </Router>
    </ThroughProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
