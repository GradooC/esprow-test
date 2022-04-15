import React, { ReactNode } from 'react';
import { Body } from './body';
import { Footer } from './footer';
import { Header } from './header';

type ModalProps = {
	children: ReactNode;
};

export function Modal({ children }: ModalProps) {
	return (
		<div className="bg-slate-800/80 w-screen h-screen flex justify-center items-center fixed left-0 top-0">
			<div className="flex flex-col bg-white py-4 px-5 w-2/5 rounded-xl">
				{children}
			</div>
		</div>
	);
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
