import React from 'react';
import Stage from './Stage.js';
import Nav from './Nav.js';


export default class Game extends React.Component{
	constructor(){
		super()
		this.state = {
			curIndex : 0,
			data : [ new Array(3).fill(new Array(3).fill(null)) ],
			_data: [ [[0, 1, 2], [3, 4, 5], [6, 7, 8]] ],
			//获胜的条件
			aWinner: [
				[[0,0],[0,1],[0,2]], 
				[[1,0],[1,1],[1,2]], 
				[[2,0],[2,1],[2,2]],

				[[0,0],[1,0],[2,0]], 
				[[0,1],[1,1],[2,1]], 
				[[0,2],[1,2],[2,2]],

				[[0,0],[1,1],[2,2]], 
				[[0,2],[1,1],[2,0]]
			],			
			//默认下一步 是 'o'
			oIsNext: true,
			setClass: new Array(3).fill(new Array(3).fill(null))
		}
	}

	handleClick([x,y]){
		let data = [];

		for(let i=0; i<this.state.data[this.state.curIndex].length; i++){
			//console.log(this.state.data[this.state.curIndex][i])
			data.push(this.state.data[this.state.curIndex][i].slice());
		}
		//如果当前位置已经有棋子了，或者有人获胜了 就直接返回
		//console.log(data[x][y])

		if(data[x][y] || this.isWinner(data)){
			return
		}else{
			//console.log(data)
			data[x][y] = this.state.oIsNext?'o':'x';
			
			let newArr = this.state.data;
			newArr.push(data)
			//console.log(newArr)

			this.setState({
				oIsNext : !this.state.oIsNext,
				data: newArr,
				curIndex: this.state.data.length-1
			})
			this.setFontColor(data)
			//console.log(this.isWinner(data))
		}

	}
	onClickHistory(index){
		this.setState({
			curIndex: index,
			oIsNext: index%2===0,
			setClass: new Array(3).fill(new Array(3).fill(null))
		})
		this.setFontColor(this.state.data[index])
	}
	setFontColor(data){
		if(this.isWinner(data)){
			let [[x1,y1], [x2, y2], [x3,y3]] = this.isWinner(data);
			let arr = [];

			for(let i=0; i<this.state.setClass.length; i++){
				//console.log(this.state.setClass[i])
				arr.push(this.state.setClass[i].slice());
			}
			arr[x1][y1] = 1;
			arr[x2][y2] = 1;
			arr[x3][y3] = 1;
			this.setState({
				setClass: arr
			})
		}
	}
	//判断是否有人赢了 有人赢返回true , 否则返回 false
	isWinner(data){
		for(let i = 0; i<this.state.aWinner.length; i++){
			let [[x1,y1], [x2, y2], [x3,y3]] = this.state.aWinner[i];
			if(data[x1][y1] && data[x1][y1]===data[x2][y2] && data[x1][y1]===data[x3][y3]){
				return [[x1,y1], [x2, y2], [x3,y3]];
			}
		}
		return false;
	}

	render(){

		let data = this.state.data[this.state.curIndex];

		let state;

		if(this.isWinner(data)){
			state = ( this.state.oIsNext ? 'x' : 'o')+'赢了';
		}else{
			state = '下一步'+(this.state.oIsNext ? 'o' : 'x')
		}

		let history;
		history = this.state.data.map((v, k) => {
			return (
				<li 
					key={k} 
					className={ k===this.state.curIndex?'bold':'' }>
					<a href="javscript:;" onClick={() => this.onClickHistory(k)}>{'历史记录'+k}</a>
				</li>
			)
		})

		return (
			<div>
				<Nav />
				<p>{state}</p>
				<Stage 
					handleClick={(n) => this.handleClick(n)}
					data={data}
					setClass={this.state.setClass}
				/>
				<ul>{history}</ul>
			</div>
		);
	}
}
