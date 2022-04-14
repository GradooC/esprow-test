import React from 'react';

type InputProps = {
	type?: 'text';
	label: string;
};

export function Input({ type, label }: InputProps) {
	return (
		<div>
			<label
				htmlFor="grid-first-name"
			>
				<p className="uppercase text-gray-700 text-xs font-bold mb-2">{label}</p>
				<input
					className="w-full bg-gray-200 text-gray-700 border border-emerald-500 rounded py-2 px-4 focus:outline-none focus:bg-white"
					id="grid-first-name"
					type={type}
				/>
			</label>
		</div>
	);
}

Input.defaultProps = {
	type: 'text',
};
