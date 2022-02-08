import React from 'react';

export class Message extends React.Component {
	render() {
		const { text, onMessageClick, author } = this.props;
		return (
			<h3 onClick={onMessageClick}>
				{author}: {text}
			</h3>
		);
	}
}
