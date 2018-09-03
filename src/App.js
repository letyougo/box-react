import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom'
import './App.css';

import Box from './components/box'

class App extends Component {

	state={
		x:0,
		y:0,
		z:0,
		zz:0,

		x2:0,
		y2:0,
		z2:0
	}

  render() {

		let {x,y,z,x2,y2,z2,zz} = this.state

    return (
      <div className="App">
	      <div className={'action'}>
		      <p>空间</p>
		      <p>
			      <label>x 旋转({x2}) ： </label>
			      <input type='range' value={x2} onChange={this.changeX2} min={'-180'} max={180}/>
		      </p>
		      <p>
			      <label>y 旋转({y2}) ： </label>
			      <input  type='range' value={y2}  onChange={this.changeY2} min={'-180'} max={180}/>
		      </p>
		      <p>
			      <label>z 旋转 ({z2})： </label>
			      <input  type='range' value={z2} onChange={this.changeZ2} min={'-180'} max={180}/>
		      </p>

		      <p>盒子</p>
		      <p>
			      <label>x 旋转({x}) ： </label>
			      <input value={x} type='range' onChange={this.changeX} min={'-180'} max={180}/>
		      </p>
		      <p>
			      <label>y 旋转 ({y})： </label>
			      <input value={y} type='range'  onChange={this.changeY} min={'-180'} max={180}/>
		      </p>
		      <p>
			      <label>z 旋转({z}) ： </label>
			      <input value={z} type='range'  onChange={this.changeZ} min={'-180'} max={180}/>
		      </p>

		      <p>
			      <label>z 位移({zz}) ： </label>
			      <input value={zz} type='number'  onChange={this.changeZs} min={'-180'} max={180}/>
		      </p>
	      </div>


	      <div className='con' ref='con'>

	      <Box  x={100} y={200} z={400} name={'小米8'} pos={{x:100,y:100}}/>
	      <Box  x={100} y={200} z={100} name={'小米6'} pos={{x:200,y:200}}/>

	      <Box x={133} y={66} z={33} name={'小米4'} pos={{x:300,y:300}}/>

	      <Box x={400} y={400} z={400} name={'推荐盒子'} pos={{x:400,y:400}}/>
        <div>


	        {/*<p>*/}
		        {/*<label>x 位移 ： </label>*/}
		        {/*<input value={x2} type='number'  onChange={this.changeX2} min={'-180'} max={180}/>*/}
	        {/*</p>*/}

	        {/*<p>*/}
		        {/*<label>x 位移 ： </label>*/}
		        {/*<input value={y2} type='number'  onChange={this.changeY2} min={'-180'} max={180}/>*/}
	        {/*</p>*/}


        </div>

	      </div>
      </div>

    );
  }

	changeX2 =(e)=>{
		let v = e.target.value
		this.setState({x2:v},()=>{
			this.trans()
		})
	}

	trans=()=>{
		let {x2,y2,z2} = this.state
		this.refs.con.style.transform = `rotateX(${x2}deg) rotateY(${y2}deg) rotateZ(${z2}deg)`

	}

	changeY2 =(e)=>{
		let v = e.target.value
		this.setState({y2:v},()=>{
			this.trans()
		})


	}

	changeZ2 =(e)=>{
		let v = e.target.value
		this.setState({z2:v},()=>{
			this.trans()
		})


	}

	changeX =(e)=>{
  	let v = e.target.value
		if(!window.picked ){
			return
		}
		this.setState({x:v})
		window.picked.style.transform = `rotateX(${v}deg)`
	}

	changeY =(e)=>{
		let v = e.target.value
		if(!window.picked ){
			return
		}
		this.setState({y:v})
		window.picked.style.transform = `rotateY(${v}deg)`
	}

	changeZ =(e)=>{
		let v = e.target.value
		if(!window.picked ){
			return
		}
		this.setState({z:v})
		window.picked.style.transform = `rotateZ(${v}deg)`
	}

	//
	// changeX2 =(e)=>{
	// 	let v = e.target.value
	// 	if(!window.picked ){
	// 		return
	// 	}
	// 	this.setState({x:v})
	// 	window.picked.style.transform = `translateX(${v}px)`
	// }
	//
	//
	// changeY2 =(e)=>{
	// 	let v = e.target.value
	// 	if(!window.picked ){
	// 		return
	// 	}
	// 	this.setState({y:v})
	// 	window.picked.style.transform = `translateY(${v}px)`
	// }

	changeZs =(e)=>{
		let v = e.target.value
		if(!window.picked ){
			return
		}
		this.setState({zz:v})
		window.picked.style.transform = `translateZ(${v}px)`
	}
}

export default App;
