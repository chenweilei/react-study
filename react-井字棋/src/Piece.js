import React from 'react';

//棋子组件
export default class Piece extends React.Component{
	render(){
		return <li className={"fl "+(this.props.isRed?'red':'')} onClick={this.props.onClick}>{this.props.index}</li>;
			
	}
}