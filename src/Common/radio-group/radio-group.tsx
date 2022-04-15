import React, {
	forwardRef,
	ReactNode,
	useImperativeHandle,
	useMemo,
	useState,
} from 'react';
import { RadioGroupContext } from './radio-group-context';

export type RadioGroupRef = {
	getState: () => string | undefined;
}

type RadioGroupProps = {
	children: ReactNode;
	label: string;
	defaultValue: string;
};

export const RadioGroup = forwardRef<RadioGroupRef, RadioGroupProps>(
	({ children, label, defaultValue }, ref) => {
		const [checked, setChecked] = useState<string>(defaultValue);

		useImperativeHandle(ref, () => ({ getState: () => checked }));

		const value = useMemo(
			() => ({
				name: label,
				checked,
				setChecked,
			}),
			[checked, label]
		);

		return (
			<RadioGroupContext.Provider value={value}>
				<fieldset className="inline-block border border-emerald-500 bg-gray-200 rounded">
					<legend className="inline-block uppercase text-gray-700 text-xs font-bold mb-1">
						{label}
					</legend>
					{children}
				</fieldset>
			</RadioGroupContext.Provider>
		);
	}
);
