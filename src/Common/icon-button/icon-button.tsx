import React, { ReactNode } from 'react';

type IconButtonProps = {
	children: ReactNode;
	onClick: () => void;
};

export function IconButton({ children, onClick }: IconButtonProps) {
	return (
		<button
			className="p-2 bg-transparent hover:bg-gray-100 rounded-full"
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
}
