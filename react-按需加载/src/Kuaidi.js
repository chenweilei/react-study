//http://www.kuaidi100.com/query?type=快递公司代号&postid=快递单号
//ps:快递公司编码:申通="shentong" EMS="ems" 顺丰="shunfeng" 圆通="yuantong" 中通="zhongtong" 韵达="yunda" 天天="tiantian" 汇通="huitongkuaidi" 全峰="quanfengkuaidi" 德邦="debangwuliu" 宅急送="zhaijisong"

import React, { Component } from 'react';
import Nav from './Nav';

class Kuaidi extends Component{
	constructor(){
		super();
		this.state={
			aType: [
				{
					name: '申通',
					str: 'shentong'
				},
				{
					name: 'EMS',
					str: 'ems'
				},
				{
					name: '顺丰',
					str: 'shunfeng'
				},
				{
					name: '圆通',
					str: 'yuantong'
				},
				{
					name: '中通',
					str: 'zhongtong'
				},
				{
					name: '韵达',
					str: 'yunda'
				},
				{
					name: '天天',
					str: 'tiantian'
				},
				{
					name: '汇通',
					str: 'huitongkuaidi'
				},
				{
					name: '全峰',
					str: 'quanfengkuaidi'
				},
				{
					name: '德邦',
					str: 'debangwuliu'
				},
				{
					name: '宅急送',
					str: 'zhaijisong'
				},
			],
			value: 11111111111,
			curType: null,
			data: []
		}
	}
	getOption(){
		return this.state.aType.map((val, key) => {
			return <option key={key} value={val.str}>{val.name}</option>
		})
	}
	selectChange(e){
		var curType = e.target.value;
		this.setState({
			curType: curType
		})
		//console.log(e.target.value)
	}
	inputChange(e){
		var value = e.target.value;
		this.setState({
			value: value
		})		
	}
	submit(){
		if(!this.state.curType){
			alert('请选择一家快递公司')
		}
		if(this.state.value === ''){
			alert('请输入单号')
		}

		fetch('http://localhost:3000/query.json')
		.then(function(res){
			return res.json();
		})
		.then( d => {
			this.setState({
				data: d.data
			})
		})
		.catch(err =>{
			console.log(err)
		})

		// fetch('https://suggest.taobao.com/sug?code=utf-8&q=卫衣&callback=cb',{
		// 	method:'GET',
		// 	mode: 'no-cors'
		// })
		// .then(res => res.text())
		// .then(res => console.log(res))

		// fetch('http://localhost:3000/1.html',{mode: 'no-cors'})
		// .then(res => res.text())
		// .then(res => console.log(res.toString()))

	}
	getData(){
		return this.state.data.map( (val ,key) =>{
			return (
				<li key={key}>
					<p>{val.time}</p>
					<p>{val.context}</p>
				</li>
			)
		})
	}
	render(){
		return (
			<div>
				<Nav></Nav>
				<h2>快递单号查询</h2>
				<div>
					<select onChange={this.selectChange.bind(this)} name="type">{this.getOption()}</select>&nbsp;&nbsp;&nbsp;&nbsp;
					输入快递单号：
					<input onChange={this.inputChange.bind(this)} type="text" value={this.state.value||''}/>
					<button onClick={this.submit.bind(this)}>点击查询</button>
					<ul>{this.getData()}</ul>
				</div>
			</div>
		)
	}
}

export default Kuaidi