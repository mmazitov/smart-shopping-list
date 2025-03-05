import React from 'react';
import { ButtonProps } from '../../types';

/**
 * Button component for various actions.
 * @param type - The type of the button element (default is 'button').
 * @param onClick - Callback function to handle button clicks.
 * @param className - Additional CSS classes for the button element.
 * @param disabled - The disabled state of the button.
 * @param children - The content to be rendered within the button.
 */
const Button: React.FC<ButtonProps> = ({
	type = 'button',
	onClick,
	className,
	disabled,
	children,
}) => {
	/**
	 * Interface for customizing dropdown component styling.
	 * @property listClass - CSS class for the dropdown options container.
	 * @property listItemClass - CSS class for individual option items.
	 * @property listSelectedClass - CSS class applied to selected option items.
	 * @property buttonClass - CSS class for the dropdown trigger button.
	 */
	const classMap: { [key: string]: string } = {
		submit:
			'bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white',
		cancel:
			'px-4 py-2 mr-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:shadow-outline focus:outline-none',
		undoRedo: 'px-3 py-1 rounded text-sm',
		undoRedoEnabled: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
		undoRedoDisabled: 'bg-gray-100 text-gray-400 cursor-not-allowed',
		remove:
			'bg-red-100 hover:bg-red-200 px-3 py-1 rounded text-red-600 text-sm',
		edit: 'bg-blue-100 hover:bg-blue-200 mr-2 px-3 py-1 rounded text-blue-600 text-sm',
	};

	const buttonClasses = classMap[className || ''] || '';

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={buttonClasses}
		>
			{children}
		</button>
	);
};

export default Button;
