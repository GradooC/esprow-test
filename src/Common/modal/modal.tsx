import React, { ReactNode } from 'react';
import { Body } from './body';
import { Footer } from './footer';
import { Header } from './header';

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

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
