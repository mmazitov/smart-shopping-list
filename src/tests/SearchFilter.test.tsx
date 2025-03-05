import { fireEvent, render, screen } from '@testing-library/react';

import React from 'react';
import SearchFilter from '../components/SearchFilter';

describe('SearchFilter', () => {
	/**
	 * Test to check if the search filter form is rendered.
	 */
	it('renders the search filter form', () => {
		render(<SearchFilter onFilterChange={jest.fn()} />);

		expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/purchased/i)).toBeInTheDocument();
	});

	/**
	 * Test to check if onFilterChange is called with updated filters.
	 */
	it('calls onFilterChange with updated filters', () => {
		const mockOnFilterChange = jest.fn();
		render(<SearchFilter onFilterChange={mockOnFilterChange} />);

		fireEvent.change(screen.getByLabelText(/search/i), {
			target: { value: 'milk' },
		});
		fireEvent.change(screen.getByLabelText(/category/i), {
			target: { value: 'dairy' },
		});
		fireEvent.click(screen.getByLabelText(/purchased/i));

		expect(mockOnFilterChange).toHaveBeenCalledWith({
			search: 'milk',
			category: 'dairy',
			showPurchased: false,
		});
	});
});
