import React, { useState } from 'react';

import { FilterOptions } from '../types';
import { CATEGORIES } from '../utils/categories';
import Button from './UI/Buttons';
import Input from './UI/Input';
import Label from './UI/Label';
import Select from './UI/Select';

/**
 * SearchFilter component for filtering shopping list items.
 * @param onFilterChange - Callback function to handle filter changes.
 */
const SearchFilter: React.FC<{
	onFilterChange: (filters: FilterOptions) => void;
}> = ({ onFilterChange }) => {
	/**
	 * State variables for search, category, and showPurchased filters.
	 */
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState('');
	const [showPurchased, setShowPurchased] = useState(true);

	/**
	 * Handle search input change.
	 * @param e - The input change event.
	 */
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearch = e.target.value;
		setSearch(newSearch);
		onFilterChange({ search: newSearch, category, showPurchased });
	};

	/**
	 * Handle category select change.
	 * @param e - The select change event.
	 */
	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newCategory = e.target.value;
		setCategory(newCategory);
		onFilterChange({ search, category: newCategory, showPurchased });
	};

	/**
	 * Handle showPurchased checkbox change.
	 * @param e - The input change event.
	 */
	const handleShowPurchasedChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		const newShowPurchased = e.target.checked;
		setShowPurchased(newShowPurchased);
		onFilterChange({ search, category, showPurchased: newShowPurchased });
	};

	/**
	 * Reset all filters to their default values.
	 */
	const handleResetFilters = () => {
		setSearch('');
		setCategory('');
		setShowPurchased(true);
		onFilterChange({
			search: '',
			category: '',
			showPurchased: true,
		});
	};

	return (
		<div className="bg-white shadow p-4 rounded">
			<div className="mb-4">
				<Label htmlFor="search">Search</Label>
				<Input
					id="search"
					value={search}
					onChange={handleSearchChange}
					placeholder="Search items..."
				/>
			</div>
			<div className="flex items-end mb-4">
				<div className="flex-grow mr-2">
					<Label htmlFor="category-filter">Category</Label>
					<Select
						id="category-filter"
						value={category}
						onChange={handleCategoryChange}
					>
						<option value="">All Categories</option>
						{CATEGORIES.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.name}
							</option>
						))}
					</Select>
				</div>
				<div className="ml-4">
					<Label className="flex items-center">
						<Input
							type="checkbox"
							checked={showPurchased}
							onChange={handleShowPurchasedChange}
							className="mr-2"
						/>
						<span className="font-bold text-gray-700 text-sm">Purchased</span>
					</Label>
				</div>
			</div>
			<div className="flex justify-end">
				<Button onClick={handleResetFilters} className="cancel" type="reset">
					Clear Filters
				</Button>
			</div>
		</div>
	);
};

export default SearchFilter;
