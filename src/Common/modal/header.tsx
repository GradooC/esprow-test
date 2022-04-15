import React from 'react';

type HeaderProps = {
	children: string;
};

export function Header({ children }: HeaderProps) {
	return <h4 className="text-center text-xl capitalize">{children}</h4>;
}
