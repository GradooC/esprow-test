import React, { forwardRef } from 'react';
import { useRadioGroupContext } from './radio-group-context';

type RadioProps = {
	color: 'green' | 'red';
	value: string;
};

export const Radio = forwardRef<HTMLTextAreaElement, RadioProps>(
	({ color, value }, ref) => {
		const { name, setChecked, checked } = useRadioGroupContext();
		return (
			<input
				className={`w-5 h-5 mx-3 accent-${color}-300`}
				type="radio"
				name={name}
				value={value}
				checked={checked === value}
				onChange={() => {
					setChecked(value);
				}}
			/>
		);
	}
);