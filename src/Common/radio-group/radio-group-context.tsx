import React, { createContext, useContext } from 'react';

type RadioGroupContextType = {
	name: string;
	checked: string | undefined;
	setChecked: React.Dispatch<React.SetStateAction<string>>;
};

export const RadioGroupContext = createContext<RadioGroupContextType | null>(
	null
);

export const useRadioGroupContext = () => {
	const context = useContext(RadioGroupContext);

	if (!context) {
		throw new Error(
			'Radio component should be placed inside the RadioGroup component'
		);
	}

	return context;
};
