import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import ItemForm from '../components/ItemForm';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from '../store/store';

describe('ItemForm', () => {
	/**
	 * Test to check if the form renders with initial values.
	 */
	it('renders the form with initial values', () => {
		render(
			<Provider store={store}>
				<ItemForm />
			</Provider>,
		);

		expect(screen.getByLabelText(/item name/i)).toBeInTheDocument();
	});

	/**
	 * Test to validate form inputs.
	 */
	it('validates form inputs', () => {
		render(
			<Provider store={store}>
				<ItemForm />
			</Provider>,
		);

		// Attempt to submit the form without filling in the inputs
		fireEvent.click(screen.getByText(/add item/i));

		// Check for validation error messages
		expect(screen.getByText(/item name is required/i)).toBeInTheDocument();
	});
});
