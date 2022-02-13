import { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { AUTHORS } from '../../utils/constans';
import { FormMui } from '../../formMui/indexMui';
import { MessageList } from '../Message/MessageList/messageList';
import '../../App.css';
import { ChatList } from '../ChatList/chatList';
import { useParams } from 'react-router';

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

const chats = [{ id: 'chat1' }];
const message = {
	chat1: [],
};

function Chat() {
	const [messageList, setMessageList] = useState([]);
	const { ChatId } = useParams();

	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME);
	};

	const sendMessage = (text, author) => {
		const newMessage = {
			text,
			author,
			id: `msg${Date.now()}`,
		};
		setMessageList((prevMessageList) => ({
			...prevMessageList,
			[ChatId]: [...prevMessageList[ChatId], newMessage],
		}));
	};

	useEffect(() => {
		let timeout;
		if (
			messageList[ChatId][messageList[ChatId].length - 1]?.author === AUTHORS.ME
		) {
			timeout = setTimeout(() => {
				sendMessage('i follow you', AUTHORS.BOT);
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [messageList]);

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<ChatList />
				<div className="App-header">
					<MessageList message={messageList[ChatId]} />
				</div>
				<FormMui submit={handleAddMessage} />
			</div>
		</ThemeProvider>
	);
}

export default Chat;
