import React, { ReactNode } from 'react';

type BodyProps = {
	children: ReactNode;
};

export function Body({ children }: BodyProps) {
	return (
		<section className="flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen pt-28">
			<div className="max-w-4xl min-w-min w-full px-5">{children}</div>
		</section>
	);
}
