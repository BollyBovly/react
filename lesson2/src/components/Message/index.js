import React from 'react';

export class Message extends React.Component {
	render() {
		return (
			<h3 onClick={this.props.onMessageClick}>
				Hello World, {this.props.text}
			</h3>
		);
	}
}
