import { Button } from 'Common/button';
import React, { ReactNode } from 'react';

type ModalProps = {
	children: ReactNode;
	title: string;
	onCancel: () => void;
};

export function Modal({ children, title, onCancel }: ModalProps) {
	return (
		<div className="bg-gray-300/80 w-screen h-screen flex justify-center items-center fixed left-0 top-0">
			<div className="flex flex-col bg-white py-4 px-5 w-2/5 rounded-xl">
				<h4 className="text-center text-xl capitalize">{title}</h4>
				<div className="py-5">{children}</div>
				<div className="flex space-x-2">
					<Button type="submit">ok</Button>
					<Button type="button" onClick={onCancel}>NOT OK</Button>
				</div>
			</div>
		</div>
	);
}
