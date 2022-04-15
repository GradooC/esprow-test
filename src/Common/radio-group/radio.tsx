import React from 'react';
import { useRadioGroupContext } from './radio-group-context';

type RadioProps = {
	color: 'green' | 'red';
	value: string;
};

export function Radio({ color, value }: RadioProps) {
	const { name, setChecked, checked } = useRadioGroupContext();

	const colorMap = {
		green: 'checked:bg-green-400',
		red: 'checked:bg-red-400',
	};

	return (
		<input
			className={`w-6 h-6 appearance-none border border-gray-300 rounded-full cursor-pointer ${colorMap[color]}`}
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
