import React, { ReactNode } from 'react';

type BodyProps = {
	children: ReactNode;
};

export function Body({ children }: BodyProps) {
	return <div className="py-5 space-y-3">{children}</div>;
}
