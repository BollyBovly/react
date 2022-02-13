import { List, ListItem } from '@mui/material';
import {
	BrowserRouter,
	Switch,
	Route,
	Routes,
	Link,
	Outlet,
	useRouteMatch,
} from 'react-router-dom';

const chats = [
	{
		name: 'Chat 1',
		id: 'chat1',
	},

	{
		name: 'Chat 2',
		id: 'chat2',
	},

	{
		name: 'Chat 3',
		id: 'chat3',
	},
];

export const ChatList = () => (
	<>
		<List>
			{chats.map((chat) => (
				<ListItem key={chat.id}>
					<Link to={`/chat/${chat.id}`}>{chat.name}</Link>{' '}
				</ListItem>
			))}
		</List>
		<Outlet />
	</>
);
