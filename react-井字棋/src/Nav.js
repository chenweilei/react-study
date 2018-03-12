import React from 'react';
import { Router, Route, hashHistory, Link } from 'react-router'

export default class Nav extends React.Component{
	render(){
		return (
			<ul>
				<li><Link to="/">首页</Link></li>
				<li><Link to="/game">Game</Link></li>
				<li><Link to="/news">News</Link></li>
			</ul>
		)
	}
}