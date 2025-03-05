import React, { FormEvent, useEffect, useState } from 'react';
import { addItem, editItem } from '../store/shoppingSlice';

import Button from './UI/Buttons';
import Input from './UI/Input';
import { ItemFormProps } from '../types';
import Label from './UI/Label';
import Select from './UI/Select';
import { delay } from '../utils/delay';
import { useDispatch } from 'react-redux';

/**
 * ItemForm component for adding or editing shopping list items.
 * @param item - The shopping item to be edited (optional).
 * @param onClose - Callback function to close the form (optional).
 * @param className - Additional CSS classes for the form element (optional).
 */
const ItemForm: React.FC<ItemFormProps> = ({
	item = null,
	onClose = null,
	className = '',
}) => {
	/**
	 * Determine if the form is in editing mode.
	 */
	const isEditing = !!item;

	/**
	 * State variables for form fields and validation errors.
	 */
	const [name, setName] = useState(item?.name || '');
	const [quantity, setQuantity] = useState(item?.quantity || 1);
	const [category, setCategory] = useState(item?.category || 'other');
	const [purchased, setPurchased] = useState(item?.purchased || false);
	const [errors, setErrors] = useState<{ name?: string; quantity?: string }>(
		{},
	);

	const dispatch = useDispatch();

	/**
	 * Effect to initialize form fields when editing an item.
	 */
	useEffect(() => {
		if (item) {
			setName(item.name);
			setQuantity(item.quantity);
			setCategory(item.category);
			setPurchased(item.purchased);
		}
	}, [item]);

	/**
	 * Validate form fields.
	 * @returns {boolean} - True if the form is valid, false otherwise.
	 */
	const validate = () => {
		const newErrors: { name?: string; quantity?: string } = {};
		if (!name) newErrors.name = 'Item name is required';
		if (quantity <= 0) newErrors.quantity = 'Quantity must be greater than 0';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	/**
	 * Handle form submission.
	 * @param e - The form event.
	 */
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate()) return;

		const itemData = { name, quantity, category, purchased };

		await delay();

		if (isEditing && item) {
			dispatch(editItem({ id: item.id, updatedItem: itemData }));
		} else {
			dispatch(addItem(itemData));
		}

		if (!isEditing) {
			setName('');
			setQuantity(1);
			setCategory('other');
			setPurchased(false);
			setErrors({});
		} else if (onClose) {
			onClose();
		}
	};

	/**
	 * Handle category change.
	 * @param e - The select element change event.
	 */
	const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCategory(e.target.value);
	};

	/**
	 * Handle quantity change.
	 * @param e - The input element change event.
	 */
	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(Number(e.target.value));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`${className} bg-white shadow mb-4 p-4 rounded`}
		>
			<h2 className="mb-4 font-bold text-xl">
				{isEditing ? 'Edit Item' : 'Add New Item'}
			</h2>
			<div className="mb-4">
				<Label htmlFor="name">Item Name</Label>
				<Input
					id="name"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				{errors.name && (
					<p className="text-red-500 text-xs italic">{errors.name}</p>
				)}
			</div>
			<div className="mb-4">
				<Label htmlFor="quantity">Quantity</Label>
				<Input
					id="quantity"
					name="quantity"
					type="number"
					value={quantity}
					onChange={handleQuantityChange}
				/>
				{errors.quantity && (
					<p className="text-red-500 text-xs italic">{errors.quantity}</p>
				)}
			</div>
			<div className="mb-4">
				<Label htmlFor="category">Category</Label>
				<Select
					id="category"
					name="category"
					value={category}
					onChange={handleCategoryChange}
				>
					<option value="fruits">Fruits</option>
					<option value="vegetables">Vegetables</option>
					<option value="dairy">Dairy</option>
					<option value="meat">Meat</option>
					<option value="bakery">Bakery</option>
					<option value="frozen">Frozen</option>
					<option value="canned">Canned Goods</option>
					<option value="drinks">Drinks</option>
					<option value="snacks">Snacks</option>
					<option value="household">Household</option>
					<option value="other">Other</option>
				</Select>
			</div>
			<div className="mb-4">
				<Label className="flex items-center">
					<Input
						className="mr-2"
						name="purchased"
						type="checkbox"
						checked={purchased}
						onChange={(e) => setPurchased(e.target.checked)}
					/>
					<span className="font-bold text-gray-700 text-sm">Purchased</span>
				</Label>
			</div>
			<div className="flex justify-end">
				{onClose && (
					<Button onClick={onClose} className="cancel">
						Cancel
					</Button>
				)}
				<Button type="submit" className="submit">
					{isEditing ? 'Save Changes' : 'Add Item'}
				</Button>
			</div>
		</form>
	);
};

export default ItemForm;
