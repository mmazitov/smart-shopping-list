import { ErrorInfo, ReactNode } from 'react';

/**
 * Props for the ItemForm component.
 * @property item - The shopping item to be edited (optional).
 * @property onClose - Callback function to close the form (optional).
 * @property className - Additional CSS classes for the form element (optional).
 */
export interface ItemFormProps {
	item?: ShoppingItem | null;
	onClose?: () => void;
	className?: string;
}

/**
 * Represents a shopping item.
 * @property id - The unique identifier for the item.
 * @property name - The name of the item.
 * @property quantity - The quantity of the item.
 * @property category - The category of the item.
 * @property purchased - The purchased state of the item.
 */
export interface ShoppingItem {
	id: string;
	name: string;
	quantity: number;
	category: string;
	purchased: boolean;
}

/**
 * Represents a category.
 * @property id - The unique identifier for the category.
 * @property name - The name of the category.
 */
export interface Category {
	id: string;
	name: string;
}

/**
 * Represents the result of a validation.
 * @property isValid - Indicates if the validation was successful.
 * @property errors - A record of validation errors.
 */
export interface ValidationResult {
	isValid: boolean;
	errors: Record<string, string | undefined>;
}

/**
 * Props for the ErrorBoundary component.
 * @property children - The child components to be wrapped.
 */
export interface ErrorBoundaryProps {
	children: ReactNode;
}

/**
 * State for the ErrorBoundary component.
 * @property hasError - Indicates if an error has occurred.
 * @property error - The error object.
 * @property errorInfo - Additional information about the error.
 */
export interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
	errorInfo: ErrorInfo | null;
}

/**
 * Represents the application state.
 * @property items - The list of shopping items.
 * @property error - The error message (if any).
 */
export interface AppState {
	items: ShoppingItem[];
	error: string | null;
}

/**
 * Options for filtering items.
 * @property search - The search term to filter items by name.
 * @property category - The category to filter items by.
 * @property showPurchased - Indicates if purchased items should be shown.
 */
export interface FilterOptions {
	search: string;
	category: string;
	showPurchased: boolean;
}

/**
 * Represents different action types for the shopping list.
 * @property type - The type of the action.
 * @property payload - The payload of the action.
 */
export type ActionType =
	| { type: 'ADD_ITEM'; payload: Omit<ShoppingItem, 'id'> }
	| {
			type: 'EDIT_ITEM';
			payload: { id: string; updatedItem: Partial<ShoppingItem> };
	  }
	| { type: 'REMOVE_ITEM'; payload: string }
	| { type: 'TOGGLE_PURCHASED'; payload: string }
	| { type: 'SET_ITEMS'; payload: ShoppingItem[] }
	| { type: 'SET_ERROR'; payload: string }
	| { type: 'CLEAR_ERROR' };

/**
 * Props for the Button component.
 * @property type - The type of the button element (default is 'button').
 * @property onClick - Callback function to handle button clicks.
 * @property className - Additional CSS classes for the button element.
 * @property disabled - The disabled state of the button.
 * @property children - The content to be rendered within the button.
 */
export interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	className?:
		| 'submit'
		| 'cancel'
		| 'undoRedo'
		| 'undoRedoEnabled'
		| 'undoRedoDisabled'
		| 'remove'
		| 'edit'
		| string;
	disabled?: boolean;
	children: React.ReactNode;
}

/**
 * Props for the Input component.
 * @property className - Additional CSS classes for the input element.
 * @property id - The id of the input element.
 * @property name - The name of the input element.
 * @property type - The type of the input element (default is 'text').
 * @property value - The current value of the input element.
 * @property onChange - Callback function to handle value changes.
 * @property checked - The checked state of the input element (for checkboxes).
 * @property placeholder - The placeholder text for the input element.
 */
export interface InputProps {
	className?: string;
	id?: string;
	name?: string;
	type?: 'text' | 'number' | 'checkbox';
	value?: string | number;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	checked?: boolean;
	placeholder?: string;
}

/**
 * Props for the Label component.
 * @property className - Additional CSS classes for the label element.
 * @property htmlFor - The id of the form element this label is associated with.
 * @property children - The content to be rendered within the label.
 */
export interface LabelProps {
	className?: string;
	htmlFor?: string;
	children: React.ReactNode;
}

/**
 * Props for the Select component.
 * @property className - Additional CSS classes for the select element.
 * @property id - The id of the select element.
 * @property name - The name of the select element.
 * @property value - The current value of the select element.
 * @property onChange - Callback function to handle value changes.
 * @property children - The options to be rendered within the select element.
 */
export interface SelectProps {
	className?: string;
	id?: string;
	name?: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	children: React.ReactNode;
}
