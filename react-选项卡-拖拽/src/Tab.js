import React, { Component } from 'react';
import './Tab.css'


export default class Tab extends Component{
	constructor(){
		super()
		this.state={
			data: [1, 0, 0, 0]
		}
	}
	btnClick(key){
		let _data = this.state.data.slice(0);
		let newData = new Array(4).fill(0);
		newData[key] = 1;
		this.setState({
			data: newData
		})
	}
	getBtn(){
		return this.state.data.map((val, key) => {
			if(val === 1){
				return <input key={key} onClick={this.btnClick.bind(this, key)} type="button" className="btnStyleActive" value={'按钮'+(key+1)} />
			}
			return <input key={key} onClick={this.btnClick.bind(this, key)} type="button" value={'按钮'+(key+1)} />
		})
	}
	getConts(){
		return this.state.data.map((val, key) => {
			if(val === 1){
				return <div className="active contStyle" key={key}>{'内容'+(key+1)}</div>
			}
			return <div className="contStyle" key={key}>{'内容'+(key+1)}</div>
		})
	}
	render(){
		return (
			<div>
				<h3>选项卡</h3>
				<div>{this.getBtn()}</div>
				<div>{this.getConts()}</div>
			</div>
		)
	}
}
















