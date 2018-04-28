import React, { Component } from 'react';
import { TextConsumer, useContext } from '../contexts/addContext';


class InputText extends Component{

	render(){

		const { onChange, onAddText } = this.props.actions;
		const { text } = this.props.state;

		return(
			<div className="card">
			 	내용: <input type="text"
					 onChange={onChange}
					 value={text}
				 />
				<button
					onClick={onAddText}
				>전송</button>
			</div>
		);
	}
}

export default useContext(InputText);