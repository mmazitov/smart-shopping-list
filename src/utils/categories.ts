import { Category } from '../types';

/**
 * List of predefined categories.
 * @property id - The unique identifier for the category.
 * @property name - The name of the category.
 */
export const CATEGORIES: Category[] = [
	{ id: 'fruits', name: 'Fruits' },
	{ id: 'vegetables', name: 'Vegetables' },
	{ id: 'dairy', name: 'Dairy' },
	{ id: 'meat', name: 'Meat' },
	{ id: 'bakery', name: 'Bakery' },
	{ id: 'frozen', name: 'Frozen' },
	{ id: 'canned', name: 'Canned Goods' },
	{ id: 'drinks', name: 'Drinks' },
	{ id: 'snacks', name: 'Snacks' },
	{ id: 'household', name: 'Household' },
	{ id: 'other', name: 'Other' },
];

/**
 * Retrieves a category by its id.
 * @param id - The unique identifier for the category.
 * @returns The category object.
 */
export const getCategoryById = (id: string): Category =>
	CATEGORIES.find((category) => category.id === id) ||
	CATEGORIES[CATEGORIES.length - 1];

/**
 * Retrieves the name of a category by its id.
 * @param id - The unique identifier for the category.
 * @returns The name of the category.
 */
export const getCategoryName = (id: string): string => {
	const category = getCategoryById(id);
	return category ? category.name : 'Other';
};
