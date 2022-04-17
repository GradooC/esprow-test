import React from 'react';

type ModalHeaderProps = {
	children: string;
};

export function ModalHeader({ children }: ModalHeaderProps) {
	return <h4 className="text-center text-xl capitalize">{children}</h4>;
}
