import {
	BrowserRouter,
	Switch,
	Route,
	Routes,
	Link,
	useRouteMatch,
} from 'react-router-dom';

import Chats from '../Chats/Chats';
import { Profile } from '../Profile/profile';

export const Router = () => {
	return (
		<BrowserRouter>
			<div>
				<Link to="/profile">Profile</Link>
			</div>

			<Routes>
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
};
