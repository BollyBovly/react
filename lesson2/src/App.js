import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message';

import { Forma } from './components/Forma';
import { AUTHORS } from './utils/constans';

function App() {
	const [messageList, setMessageList] = useState([]);

	const handleAddMessage = (text) => {
		const newMessage = {
			text,
			author: AUTHORS.ME,
		};
		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
	};

	useEffect(() => {
		let timeout;
		if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				const newMessage = {
					text: 'hey, i follow you!',
					author: AUTHORS.BOT,
				};
				setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
			}, 1000);

			return () => {
				clearTimeout(timeout);
			};
		}
		console.log(messageList[messageList.length - 1]);
	}, [messageList]);

	return (
		<div className="App">
			<header className="App-header">
				{messageList.map((message) => (
					<Message text={message.text} author={message.author} />
				))}

				<Forma onSubmit={handleAddMessage} />
			</header>
		</div>
	);
}

export default App;
