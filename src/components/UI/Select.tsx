import React from 'react';
import { SelectProps } from '../../types';

/**
 * Select component for rendering a dropdown menu.
 * @param className - Additional CSS classes for the select element.
 * @param id - The id of the select element.
 * @param name - The name of the select element.
 * @param value - The current value of the select element.
 * @param onChange - Callback function to handle value changes.
 * @param children - The options to be rendered within the select element.
 */
const Select: React.FC<SelectProps> = ({
	className,
	id,
	name,
	value,
	onChange,
	children,
}) => {
	/**
	 * Default CSS classes for the select element.
	 */
	const defaultClasses =
		'bg-white leading-tight shadow px-3 py-2 border rounded focus:shadow-outline focus:outline-none w-full text-gray-700';

	return (
		<select
			className={`${defaultClasses} ${className}`}
			id={id}
			name={name}
			value={value}
			onChange={onChange}
		>
			{children}
		</select>
	);
};

export default Select;
