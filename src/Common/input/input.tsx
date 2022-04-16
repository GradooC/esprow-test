import React, { forwardRef } from 'react';
import { blank } from 'Utils';
import { InputType } from './types';

type InputProps = InputType & {
	label: string;
};

const formatterMap = {
	date: (value: string | number) => new Date(value).toLocaleDateString('en-CA'),
	number: blank,
	email: blank,
	text: blank,
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, label, defaultValue }, ref) => {
		const formattedDefaultValue = formatterMap[type](defaultValue);
		return (
			<div>
				<label htmlFor={`input-${label}`}>
					<p className="inline-block uppercase text-gray-700 text-xs font-bold mb-1">
						{label}
					</p>
					<input
						ref={ref}
						className="w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-4 focus:outline-none focus:bg-white"
						id={`input-${label}`}
						type={type}
						defaultValue={formattedDefaultValue}
					/>
				</label>
			</div>
		);
	}
);
