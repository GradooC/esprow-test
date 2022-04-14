import React from 'react';

type TextareaProps = {
	label?: string;
	defaultValue: string;
};

export function Textarea({ label, defaultValue }: TextareaProps) {
	return (
		<div>
			<label htmlFor={`textarea-${label}`}>
				<p className="inline-block uppercase text-gray-700 text-xs font-bold mb-1">
					{label}
				</p>
				<textarea
					id={`textarea-${label}`}
					className="w-full bg-gray-200 text-gray-700 border border-emerald-500 rounded py-2 px-4 focus:outline-none focus:bg-white"
					defaultValue={defaultValue}
				/>
			</label>
		</div>
	);
}

Textarea.defaultProps = {
	label: 'textarea',
};
