import React from 'react';
import { InputProps } from '../../types';

/**
 * Input component for form elements.
 * @param className - Additional CSS classes for the input element.
 * @param id - The id of the input element.
 * @param name - The name of the input element.
 * @param type - The type of the input element (default is 'text').
 * @param value - The current value of the input element.
 * @param onChange - Callback function to handle value changes.
 * @param checked - The checked state of the input element (for checkboxes).
 * @param placeholder - The placeholder text for the input element.
 */
const Input: React.FC<InputProps> = ({
	className,
	id,
	name,
	type = 'text',
	value,
	onChange,
	checked,
	placeholder,
}) => {
	/**
	 * Base CSS classes for the input element.
	 */
	const baseClasses = 'shadow  rounded';

	/**
	 * CSS classes for checkbox input elements.
	 */
	const checkboxClasses = 'w-5 h-5 ';

	/**
	 * Default CSS classes for non-checkbox input elements.
	 */
	const defaultClasses =
		'bg-white appearance-none leading-tight shadow px-3 py-2 border rounded focus:shadow-outline focus:outline-none w-full text-gray-700 border';

	return (
		<input
			className={`${baseClasses} ${type === 'checkbox' ? checkboxClasses : defaultClasses} ${className}`}
			id={id}
			name={name}
			type={type}
			value={value}
			onChange={onChange}
			checked={checked}
			placeholder={placeholder}
		/>
	);
};

export default Input;
