import React, { ReactNode } from 'react';
import { ModalBody } from './modal-body';
import { ModalFooter } from './modal-footer';
import { ModalHeader } from './modal-header';

type ModalProps = {
	children: ReactNode;
};

export function Modal({ children }: ModalProps) {
	return (
		<div className="bg-slate-800/80 flex justify-center items-center fixed inset-0 backdrop-blur-sm">
			<div className="flex flex-col bg-white py-4 px-5 w-2/5 min-w-min max-w-md rounded-xl">
				{children}
			</div>
		</div>
	);
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
