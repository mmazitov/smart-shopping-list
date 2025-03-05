import { ShoppingItem, ValidationResult } from '../types';

/**
 * Validates a shopping item.
 * @param item - The shopping item to be validated.
 * @returns The validation result including validity and errors.
 */
export const validateItem = (item: Partial<ShoppingItem>): ValidationResult => {
	const errors: Record<string, string | undefined> = {};

	if (!item.name || item.name.trim() === '') {
		errors.name = 'Item name is required';
	}

	if (item.quantity == null) {
		errors.quantity = 'Quantity is required';
	} else if (typeof item.quantity === 'number' && item.quantity <= 0) {
		errors.quantity = 'Quantity must be greater than 0';
	} else if (isNaN(Number(item.quantity))) {
		errors.quantity = 'Quantity must be a number';
	}

	if (!item.category) {
		errors.category = 'Category is required';
	}

	return { isValid: Object.keys(errors).length === 0, errors };
};
