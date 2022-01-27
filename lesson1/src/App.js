import './App.css';
import { Message } from './components/Message';

const myText = 'How is it going?!';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Message text={myText} />
			</header>
		</div>
	);
}

export default App;
