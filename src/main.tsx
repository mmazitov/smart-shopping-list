import './index.css';

import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.js';
import React from 'react';
import RootProvider from './store/RootProvider.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RootProvider>
				<ErrorBoundary>
					<App />
				</ErrorBoundary>
			</RootProvider>
		</StrictMode>,
	);
} else {
	console.error('Root element not found');
}
