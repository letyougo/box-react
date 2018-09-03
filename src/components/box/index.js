import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';



export default class Box extends Component {

	state = {
		down : false
	}

	render() {

		let {x='100px', y='200px', z='300px' ,name } = this.props
		x = parseInt(x) + 'px'
		y = parseInt(y) + 'px'
		z = parseInt(z) + 'px'

		let {down} = this.state

		return (
			<ul onClick={this.onClick}  onMouseDown={this.onDown} ref={'ul'} style={{width:x,height:y,transformOrigin:'center center -100px'}} onKeyDown={this.keyDown}>
				<li style={{width:z,height:y,transform:` translateZ(${parseInt(z)/2}px) rotateY(90deg)`}}></li>
				<li style={{width:z,height:y,transform:`translateX(${x}) translateZ(${parseInt(z)/2}px) rotateY(90deg)`}}></li>
				<li style={{width:x,height:z,transform:`translateZ(-${parseInt(z)/2}px) rotateX(90deg)`}}></li>
				<li style={{width:x,height:z,transform:`translateZ(${parseInt(z)/2}px) translateY(${y}) rotateX(-90deg)`}}></li>
				<li style={{width:x,height:y,transform:`translateZ(-${parseInt(z)/2}px)`}}></li>
				<li style={{width:x,height:y,transform:`translateZ(${parseInt(z)/2}px)`,textAlign:'center',lineHeight:y}}>{name}</li>
			</ul>
		);
	}

	onDown = (e)=>{
		let {x,y} = this.props


		let that = this


		let cb = function(e){
			console.log('111')
			that.refs.ul.className = 'picked'
			let dv = that.refs.ul
			dv.style.left = e.clientX - parseInt(x)/2 - 250 + 'px'
			dv.style.top = e.clientY - parseInt(y)/2 + 'px'
			console.log(e.clientX,e.clientY)
		}
		document.addEventListener('mousemove',cb)

		document.addEventListener('mouseup',function () {
			that.refs.ul.className = ''
			document.removeEventListener('mousemove',cb,false)
		})
	}

	keyDown(e){
		console.log(e.key)
	}

	onClick=()=>{
		if(window.picked){
			console.log(window.picked,'picked')
			window.picked.style.border = 'none'
		}
		window.picked = ReactDOM.findDOMNode(this.refs.ul)
		window.picked.style.border = '1px solid yellow'
		let picked = window.picked

	}

	componentDidMount(){
		let {pos} = this.props
		let dv = this.refs.ul
		dv.style.left = parseInt(pos.x) + 'px'
		dv.style.top =  parseInt(pos.y) + 'px'



	}
}

