import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FavoriteProvider } from './state/FavoriteContext';

ReactDOM.render(
	<React.StrictMode>
		<FavoriteProvider>
			<App />
		</FavoriteProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
