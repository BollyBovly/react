import {
	BrowserRouter,
	Switch,
	Route,
	Routes,
	Link,
	useRouteMatch,
} from 'react-router-dom';

import Chats from '../Chats';
import { Profile } from '../Profile/profile';

export const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Link to="/profile">Profile</Link>
				<Link to="/chats">Chats</Link>
			</div>

			<Routes>
				<Route path="/profile" element={<Profile />} />
				<Route path="/chats" element={<Chats />} />
			</Routes>
		</BrowserRouter>
	);
};
