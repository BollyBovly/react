import { useEffect, useState } from 'react';
import './App.css';
import { Message } from './components/Message';
// import { Counter } from './components/Counter';
import { Forma } from './components/Forma';

function App() {
	const [messageList, setMessageList] = useState([
		{ text: 'msg1', author: 'Pushkin' },
		{ text: 'i am Robot', author: 'Robot' },
	]);

	const handleAddMessage = (text) => {
		setMessageList((prevMessageList) => [...prevMessageList, text]);
	};

	useEffect(() => {
		console.log(messageList[messageList.length - 1]);
	}, [messageList]);

	return (
		<div className="App">
			<header className="App-header">
				{messageList.map((text) => (
					<Message text={text} />
				))}
				<Forma onSubmit={handleAddMessage} />
			</header>
		</div>
	);
}

export default App;
