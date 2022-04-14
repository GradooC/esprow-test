import React from 'react';

type ButtonProps = {
	children: string;
	type?: 'submit' | 'button';
};

export function Button({ children, type }: ButtonProps) {
	return (
		<button
			className="block text-white bg-teal-500 hover:bg-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase basis-full"
			type={type === 'button' ? 'button' : 'submit'}
		>
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: 'button',
};
