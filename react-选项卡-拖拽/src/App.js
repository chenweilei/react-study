import React, { Component } from 'react';
import './App.css';
import Tab from './Tab'

const boxStyle = {position: 'relative', width: '600px', height: '500px', 'marginTop': '200px', 'marginLeft': '100px', border: '1px solid #000'};

class App extends Component {
  constructor(){
    super()
    this.state={
      top: 0,
      left: 0
    }
    this.timer = null;
    this.disX = 0;
    this.disY = 0;
    this.bDrag = false;
  }
  componentDidMount(){
    var _this = this;
    document.onmousemove = function(e){
      if(_this.bDrag){
        let parent = _this.refs.box;
        let maxX = parent.offsetWidth - 100;
        let maxY = parent.offsetHeight - 100;
        let x = e.clientX - _this.disX;
        let y = e.clientY - _this.disY;
        //console.log(x, y)
        if(x<0){
          x = 0
        }

        if(y<0){
          y = 0
        }
        if(x>maxX){
          x = maxX
        }
        if(y>maxY){
          y = maxY
        }
        _this.setState({
          top: y,
          left: x
        })
      }
    } 


    document.onmouseup = function(){
      _this.bDrag = false;
    }
  }
  mousedown(e){
    this.bDrag = true;
    this.disX = e.clientX - this.state.left;
    this.disY = e.clientY - this.state.top;
  }
  render() {

    let style = {top: this.state.top+'px', left: this.state.left+'px'};

    return (
      <div>
        <Tab/>
        <div ref="box" style={boxStyle}>
          <div onMouseDown={this.mousedown.bind(this)} className="div" style={style}></div>
        </div>
      </div>
    )
  }

}

export default App;
