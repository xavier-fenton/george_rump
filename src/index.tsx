import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Home } from './pages/Home/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './index.css';
import { ArchivePage } from './pages/Archive/index.js';

export function App() {
	return (
		<LocationProvider>
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
					<Route path="/archive" component={ArchivePage} />

				</Router>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
