import React, { forwardRef } from 'react';

type TextareaProps = {
	label?: string;
	defaultValue: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ label, defaultValue }, ref) => {
		return (
			<div>
				<label htmlFor={`textarea-${label}`}>
					<p className="inline-block uppercase text-gray-700 text-xs font-bold mb-1">
						{label}
					</p>
					<textarea
						ref={ref}
						id={`textarea-${label}`}
						className="w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-2 px-4 focus:outline-none focus:bg-white"
						defaultValue={defaultValue}
					/>
				</label>
			</div>
		);
	}
);

Textarea.defaultProps = {
	label: 'textarea',
};
