import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';

class App extends Component{
	constructor(){
		super()
		this.state = {
			name: null,
			tel: null,

		}
		this.reg = {
			name: /[\u4e00-\u9fa5]+/,
			tel: /0?(13|14|15|17|18|19)[0-9]{9}/
		}
	}
	change(name,e){
		let value = e.target.value;
		this.setState({
			[name]: value,
			[name+'IsErr']: this.reg[name].test(value)
		})
	}
	submit(){
		console.log(this.state.name, this.state.tel)
	}
	render(){
		return (
			<div>
				<Nav></Nav>
				<h2>表单提交</h2>
				<div>
					姓名：<input onChange={this.change.bind(this,'name')} name="name" type="text" value={this.state.name || ''}/>
					<span style={{visibility: this.state.nameIsErr?'hidden':'initial', color: 'red'}}>*</span>
				</div>
				<div>
					电话：<input onChange={this.change.bind(this,'tel')} name="tel" type="text" value={this.state.tel || ''}/>
					<span style={{visibility: this.state.telIsErr?'hidden':'initial', color: 'red'}}>*</span>
				</div>
				<button onClick={this.submit.bind(this)}>提交</button>

			</div>
		)
	}
}


export default App;
