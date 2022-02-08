// import { useEffect } from 'react';
import { Message } from '../index.js';

export const MessageList = ({ message }) =>
	message.map((message) => (
		<Message
			key={message.id}
			messagetext={message.text}
			author={message.author}
		/>
	));
