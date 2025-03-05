import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import ItemList from '../components/ItemList';
import { Provider } from 'react-redux';
import React from 'react';
import { ShoppingItem } from '../types';
import { setItems } from '../store/shoppingSlice';
import { store } from '../store/store';

const mockItems: ShoppingItem[] = [
	{ id: '1', name: 'Milk', quantity: 2, category: 'dairy', purchased: false },
	{ id: '2', name: 'Bread', quantity: 1, category: 'bakery', purchased: true },
];

describe('ItemList', () => {
	/**
	 * Set up the store with mock items before each test.
	 */
	beforeEach(() => {
		store.dispatch(setItems(mockItems));
	});

	/**
	 * Test to check if the list of items is rendered.
	 */
	it('renders the list of items', () => {
		render(
			<Provider store={store}>
				<ItemList filters={{ search: '', category: '', showPurchased: true }} />
			</Provider>,
		);

		expect(screen.getByText(/milk/i)).toBeInTheDocument();
		expect(screen.getByText(/bread/i)).toBeInTheDocument();
	});

	/**
	 * Test to check if items are filtered based on search input.
	 */
	it('filters items based on search', () => {
		render(
			<Provider store={store}>
				<ItemList
					filters={{ search: 'milk', category: '', showPurchased: true }}
				/>
			</Provider>,
		);

		expect(screen.getByText(/milk/i)).toBeInTheDocument();
		expect(screen.queryByText(/bread/i)).toBeNull();
	});
});
