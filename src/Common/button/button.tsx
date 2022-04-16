import noop from 'lodash.noop';
import React from 'react';

type ButtonProps = {
	children: string;
	type?: 'submit' | 'button';
	onClick?: () => void;
};

export function Button({ children, type, onClick }: ButtonProps) {
	return (
		<button
			className="block text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase basis-full"
			type={type === 'button' ? 'button' : 'submit'}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: 'button',
	onClick: noop,
};
