import React, { useState } from 'react';
import { removeItem, togglePurchased } from '../store/shoppingSlice';

import Button from './UI/Buttons';
import Input from './UI/Input';
import ItemForm from './ItemForm';
import { ShoppingItem } from '../types';
import { delay } from '../utils/delay';
import { getCategoryName } from '../utils/categories';
import { useDispatch } from 'react-redux';

/**
 * ShoppingListItem component for rendering individual shopping list items.
 * @param item - The shopping item to be rendered.
 */
const ShoppingListItem: React.FC<{ item: ShoppingItem }> = ({ item }) => {
	/**
	 * State to manage edit mode.
	 */
	const [isEditing, setIsEditing] = useState(false);
	const dispatch = useDispatch();

	/**
	 * Handles toggling the purchased state of the item.
	 */
	const handleToggle = async () => {
		await delay();
		dispatch(togglePurchased(item.id));
	};

	/**
	 * Handles removing the item from the list.
	 */
	const handleRemove = async () => {
		if (window.confirm('Are you sure you want to remove this item?')) {
			await delay();
			dispatch(removeItem(item.id));
		}
	};

	/**
	 * Handles enabling the edit mode for the item.
	 */
	const handleEdit = () => {
		setIsEditing(true);
	};

	if (isEditing) {
		return (
			<div className="mb-4">
				<ItemForm item={item} onClose={() => setIsEditing(false)} />
			</div>
		);
	}

	return (
		<div
			className={`flex items-center p-3 border rounded mb-2 ${item.purchased ? 'bg-gray-100 opacity-70' : 'bg-white'}`}
		>
			<div className="mr-2">
				<Input
					type="checkbox"
					checked={item.purchased}
					onChange={handleToggle}
				/>
			</div>
			<div className="flex-grow">
				<div
					className={`text-lg ${item.purchased ? 'line-through text-gray-500' : 'text-gray-800'}`}
				>
					{item.name}
				</div>
				<div className="text-gray-600 text-sm">
					Quantity: {item.quantity} • Category: {getCategoryName(item.category)}
				</div>
			</div>
			<div className="flex">
				<Button onClick={handleEdit} className="edit">
					Edit
				</Button>
				<Button onClick={handleRemove} className="remove">
					Remove
				</Button>
			</div>
		</div>
	);
};

export default ShoppingListItem;
