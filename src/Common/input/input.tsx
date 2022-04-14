import React, { forwardRef } from 'react';
import { InputType } from './types';

type InputProps = InputType & {
	label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ type, label, defaultValue }, ref) => {
		return (
			<div>
				<label htmlFor={`input-${label}`}>
					<p className="inline-block uppercase text-gray-700 text-xs font-bold mb-1">
						{label}
					</p>
					<input
						ref={ref}
						className="w-full bg-gray-200 text-gray-700 border border-emerald-500 rounded py-2 px-4 focus:outline-none focus:bg-white"
						id={`input-${label}`}
						type={type}
						defaultValue={defaultValue}
					/>
				</label>
			</div>
		);
	}
);
