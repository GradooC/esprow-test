import React, { ReactNode } from 'react';

type ModalBodyProps = {
	children: ReactNode;
};

export function ModalBody({ children }: ModalBodyProps) {
	return <div className="py-5 space-y-3">{children}</div>;
}
