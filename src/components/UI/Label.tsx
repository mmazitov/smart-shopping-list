import React from 'react';
import { LabelProps } from '../../types';

/**
 * Label component for form elements.
 * @param className - Additional CSS classes for the label element.
 * @param htmlFor - The id of the form element this label is associated with.
 * @param children - The content to be rendered within the label.
 */
const Label: React.FC<LabelProps> = ({ className, htmlFor, children }) => {
	return (
		<label
			className={`block mb-2 font-bold text-gray-700 text-sm ${className}`}
			htmlFor={htmlFor}
		>
			{children}
		</label>
	);
};

export default Label;
