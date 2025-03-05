import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import shoppingReducer from './shoppingSlice';

/**
 * Configuration for persisting the Redux store.
 */
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['shopping'],
};

/**
 * Root reducer combining all slice reducers.
 */
const rootReducer = combineReducers({
	shopping: shoppingReducer,
});

/**
 * Persisted reducer for the Redux store.
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store configuration.
 */
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
				ignoredPaths: ['register', 'rehydrate'],
			},
		}),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
