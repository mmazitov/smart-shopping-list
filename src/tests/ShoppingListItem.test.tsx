import { fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import React from 'react';
import { ShoppingItem } from '../types';
import ShoppingListItem from '../components/ShoppingListItem';
import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from '../store/shoppingSlice';

const mockItem: ShoppingItem = {
	id: '1',
	name: 'Milk',
	quantity: 2,
	category: 'dairy',
	purchased: false,
};

/**
 * Utility function to render a component with a Redux store.
 * @param component - The React component to be rendered.
 * @returns The rendered component and the store.
 */
const renderWithStore = (component: React.ReactNode) => {
	const store = configureStore({
		reducer: {
			shopping: shoppingReducer,
		},
		preloadedState: {
			shopping: {
				items: [mockItem],
				error: null,
			},
		},
	});

	return { ...render(<Provider store={store}>{component}</Provider>), store };
};

describe('ShoppingListItem', () => {
	/**
	 * Test to check if the item details are rendered.
	 */
	it('renders the item details', () => {
		renderWithStore(<ShoppingListItem item={mockItem} />);

		expect(screen.getByText(/milk/i)).toBeInTheDocument();
		expect(screen.getByText(/quantity: 2/i)).toBeInTheDocument();
		expect(screen.getByText(/category: dairy/i)).toBeInTheDocument();
	});

	/**
	 * Test to check if the purchased state is toggled.
	 */
	it('toggles purchased state', () => {
		const { store } = renderWithStore(<ShoppingListItem item={mockItem} />);

		const checkbox = screen.getByRole('checkbox');
		fireEvent.click(checkbox);

		expect(
			store.getState().shopping.items.find((item) => item.id === mockItem.id)
				?.purchased,
		).toBe(true);
	});
});
