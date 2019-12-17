import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pagina from './Pagina';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
        <Switch>
	 	<Route path="/app" exact={true} component={App} />
		<Route path="/pagina" component={Pagina} />
		</Switch>
	</ BrowserRouter>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();