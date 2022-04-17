import React, { forwardRef, useTransition } from 'react';
import { InputType } from './types';
import { ReactComponent as SandClockIcon } from 'Icons/sand-clock.svg';

type InputProps = InputType & {
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({
		type, label, defaultValue, onChange,
	}, ref) => {
		const [isPending, startTransition] = useTransition();

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			startTransition(() => {
				onChange?.(e);
			});
		};

		let formattedDefaultValue;

		switch (type) {
		case 'date':
			formattedDefaultValue = new Date(defaultValue).toLocaleDateString(
				'en-CA'
			);
			break;
		default:
			formattedDefaultValue = defaultValue;
			break;
		}

		return (
			<div>
				<label htmlFor={`input-${label}`}>
					{label && (
						<p className="inline-block uppercase text-gray-700 text-xs font-bold mb-1">
							{label}
						</p>
					)}
					<div className="relative">
						<input
							ref={ref}
							className="w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-4 focus:outline-none focus:bg-white"
							id={`input-${label}`}
							type={type}
							defaultValue={formattedDefaultValue}
							onChange={handleChange}
						/>
						{isPending && (
							<div className="absolute inset-y-0 right-0 flex items-center animate-make-visible pr-1">
								<SandClockIcon width={25} fill="#64748b" />
							</div>
						)}
					</div>
				</label>
			</div>
		);
	}
);

Input.defaultProps = {
	label: undefined,
	onChange: undefined,
};
