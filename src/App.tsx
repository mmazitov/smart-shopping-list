import './App.css';

import React, { useState } from 'react';

import { FilterOptions } from './types';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';
import SearchFilter from './components/SearchFilter';

const App: React.FC = () => {
	/**
	 * State for managing filter options.
	 * @property search - The search term to filter items by name.
	 * @property category - The category to filter items by.
	 * @property showPurchased - Indicates if purchased items should be shown.
	 */
	const [filters, setFilters] = useState<FilterOptions>({
		search: '',
		category: '',
		showPurchased: true,
	});

	return (
		<div className="mx-auto px-4 py-8 max-w-4xl container">
			<header className="mb-8">
				<h1 className="font-bold text-blue-600 text-3xl text-center">
					Smart Shopping List
				</h1>
				<p className="mt-2 text-gray-600 text-center">
					Organize your shopping efficiently
				</p>
			</header>

			<div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
				<div className="lg:col-span-1">
					<div className="top-4 sticky">
						<ItemForm className="mb-6" />
						<SearchFilter onFilterChange={setFilters} />
					</div>
				</div>

				<div className="lg:col-span-2">
					<ItemList filters={filters} />
				</div>
			</div>
		</div>
	);
};

export default App;
