import { render } from 'preact';
import './index.css';
import { App2 } from './components/_App.js';

export function App() {
	return (
		<App2/>
	);
}

render(<App />, document.getElementById('app'));
