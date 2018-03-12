import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Link } from 'react-router'

import Game from './Game.js';
import Nav from './Nav.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component{
	render(){
		return (
			<div>
				<h1>Hello React-Router</h1>
				<Nav />
			</div>
		)
	}
}

class News extends React.Component{
	render(){
		return (
			<div>
				<h1>新闻页</h1>
				<Nav />
			</div>
		)
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/game" component={Game}/>
		<Route path="/news" component={News}/>
	</Router>
	, document.getElementById('root'));
registerServiceWorker();
