import { Router } from './components/Router/router';
import { Provider } from 'react-redux';
import { store } from './Store/index';

const App = () => (
	<Provider store={store}>
		<Router />
	</Provider>
);

export default App;
