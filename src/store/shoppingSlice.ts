import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AppState, ShoppingItem } from '../types';

/**
 * Initial state for the shopping slice.
 */
const initialState: AppState = {
	items: [],
	error: null,
};

/**
 * Shopping slice for managing shopping list state.
 */
const shoppingSlice = createSlice({
	name: 'shopping',
	initialState,
	reducers: {
		/**
		 * Adds a new item to the shopping list.
		 * @param state - The current state.
		 * @param action - The action payload containing the new item details.
		 */
		addItem(state, action: PayloadAction<Omit<ShoppingItem, 'id'>>) {
			const newItem = { ...action.payload, id: Date.now().toString() };
			state.items.push(newItem);
		},
		/**
		 * Edits an existing item in the shopping list.
		 * @param state - The current state.
		 * @param action - The action payload containing the item id and updated details.
		 */
		editItem(
			state,
			action: PayloadAction<{ id: string; updatedItem: Partial<ShoppingItem> }>,
		) {
			const { id, updatedItem } = action.payload;
			const index = state.items.findIndex((item) => item.id === id);
			if (index !== -1) {
				state.items[index] = { ...state.items[index], ...updatedItem };
			}
		},
		/**
		 * Removes an item from the shopping list.
		 * @param state - The current state.
		 * @param action - The action payload containing the item id to be removed.
		 */
		removeItem(state, action: PayloadAction<string>) {
			state.items = state.items.filter((item) => item.id !== action.payload);
		},
		/**
		 * Toggles the purchased state of an item.
		 * @param state - The current state.
		 * @param action - The action payload containing the item id to be toggled.
		 */
		togglePurchased: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.id === action.payload);
			if (item) {
				item.purchased = !item.purchased;
			}
		},
		/**
		 * Sets the items in the shopping list.
		 * @param state - The current state.
		 * @param action - The action payload containing the new list of items.
		 */
		setItems(state, action: PayloadAction<ShoppingItem[]>) {
			state.items = action.payload;
			state.error = null;
		},
		/**
		 * Sets an error message.
		 * @param state - The current state.
		 * @param action - The action payload containing the error message.
		 */
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
		/**
		 * Clears the error message.
		 * @param state - The current state.
		 */
		clearError(state) {
			state.error = null;
		},
	},
});

export const {
	addItem,
	editItem,
	removeItem,
	togglePurchased,
	setItems,
	setError,
	clearError,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
