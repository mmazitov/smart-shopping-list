import { persistor, store } from './store';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

/**
 * RootProvider component to wrap the application with Redux and PersistGate providers.
 * @param children - The child components to be wrapped.
 */
const RootProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			{children}
		</PersistGate>
	</Provider>
);

export default RootProvider;
