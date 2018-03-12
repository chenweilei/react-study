import React from 'react';
import Piece from './Piece.js';

//棋盘组件
export default class Stage extends React.Component{

	renderPiece([x, y]){
		let html = this.props.data[x][y];
		let isRed = this.props.setClass[x][y];

		return <Piece key={y} isRed={isRed} index={html} onClick={ () => this.props.handleClick([x, y])}/>
	}
	rednerBox(){
		return (this.props.data.map((v, k1) => {

			let aList = v.map((v2, k2) => {
				return this.renderPiece([k1, k2])
			})
			return <ul key={k1} className="list-row clearfix">{aList}</ul>
		}))
	}
	render(){
		return (
			<div className="box">{this.rednerBox()}</div>
		)
	}
}
