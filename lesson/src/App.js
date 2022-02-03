import { useEffect, useState } from 'react';
import './App.css';

// import { Forma } from './components/Forma';
import { AUTHORS } from './utils/constans';
import { MessageList } from './components/Message/MessageList/messageList';
import { FormMui } from './formMui/indexMui';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, orange, pink, purple } from '@mui/material/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: pink[500],
		},
		secondary: {
			main: green[500],
		},
	},
});

function App() {
	const [messageList, setMessageList] = useState([]);
	// const [toggle, setToggle] = useState(false);

	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME);
	};

	const sendMessage = (text, author) => {
		const newMessage = {
			text,
			author,
			id: `msg${Date.now()}`,
		};
		setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
	};

	useEffect(() => {
		let timeout;
		if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				sendMessage('i follow you', AUTHORS.BOT);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [messageList]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<div className="App-header">
					<MessageList message={messageList} />
				</div>
				<FormMui onSubmit={handleAddMessage} />
			</div>
		</ThemeProvider>
	);
}

export default App;
