import React, { Component } from 'react';
import {TextConsumer} from '../contexts/TextContext';


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

const InputTextContainer = () => {
	return (
		<TextConsumer>
			{
				({actions, state}) => (
					<div>
						<InputText
						actions={actions}
						state={state}
						/>
					</div>
				)
			}
		</TextConsumer>
	)
}

export default InputTextContainer;