import React, { ReactNode } from 'react';

type HeaderProps = {
	children: ReactNode;
};

export function Header({ children }: HeaderProps) {
	return (
		<header className="fixed inset-x-0 top-0 flex justify-center p-5 bg-sky-700/60 backdrop-blur-sm">
			<div className="flex flex-start max-w-4xl min-w-min w-full">{children}</div>
		</header>
	);
}
