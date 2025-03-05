import React, { useEffect, useMemo } from 'react';

import { useSelector } from 'react-redux';
import { useUndoRedo } from '../hooks/useUndoRedo';
import { RootState } from '../store/store';
import { FilterOptions } from '../types';
import ShoppingListItem from './ShoppingListItem';

/**
 * ItemList component for rendering a list of shopping items with filters and undo/redo functionality.
 * @param filters - The filter options to apply to the item list.
 */
const ItemList: React.FC<{ filters: FilterOptions }> = ({ filters }) => {
	/**
	 * Select items from the Redux store.
	 */
	const items = useSelector((state: RootState) => state.shopping.items);

	/**
	 * Destructure undo/redo functionality from the custom hook.
	 */
	const { recordState, undo, redo, canUndo, canRedo } = useUndoRedo();

	/**
	 * Record the current state of items whenever they change.
	 */
	useEffect(() => {
		recordState(items);
	}, [items, recordState]);

	/**
	 * Filter items based on the provided filters.
	 */
	const filteredItems = useMemo(() => {
		return items.filter((item) => {
			if (
				filters.search &&
				!item.name.toLowerCase().includes(filters.search.toLowerCase())
			)
				return false;
			if (filters.category && item.category !== filters.category) return false;
			if (!filters.showPurchased && item.purchased) return false;
			return true;
		});
	}, [items, filters]);

	/**
	 * Group filtered items by category.
	 */
	const groupedItems = useMemo(() => {
		const groups: Record<string, typeof items> = {};
		filteredItems.forEach((item) => {
			groups[item.category] = groups[item.category] || [];
			groups[item.category].push(item);
		});
		return groups;
	}, [filteredItems]);

	/**
	 * Sort categories alphabetically.
	 */
	const sortedCategories = useMemo(
		() => Object.keys(groupedItems).sort(),
		[groupedItems],
	);

	return (
		<div>
			<div className="flex justify-between items-center mb-4">
				<h2 className="font-bold text-xl">Shopping List</h2>
				<div className="space-x-2">
					<button
						onClick={undo}
						disabled={!canUndo}
						className={`px-3 py-1 rounded text-sm ${canUndo ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
					>
						Undo
					</button>
					<button
						onClick={redo}
						disabled={!canRedo}
						className={`px-3 py-1 rounded text-sm ${canRedo ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
					>
						Redo
					</button>
				</div>
			</div>
			{filteredItems.length === 0 ? (
				<div className="bg-gray-100 p-4 rounded text-center">
					<p className="text-gray-600">
						{items.length === 0
							? 'Your shopping list is empty. Add some items to get started!'
							: 'No items match your current filters.'}
					</p>
				</div>
			) : (
				<div>
					{sortedCategories.map((category) => (
						<div key={category} className="mb-6">
							{sortedCategories.length > 1 && (
								<h3 className="mb-2 pb-1 border-b font-semibold text-gray-700 text-lg">
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</h3>
							)}
							{groupedItems[category].map((item) => (
								<ShoppingListItem key={item.id} item={item} />
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default ItemList;
