import React from 'react';
import { Button } from 'Common/button';

type FooterProps = {
	onCancel: () => void;
};

export function Footer({ onCancel }: FooterProps) {
	return (
		<div className="flex space-x-2">
			<Button type="submit">submit</Button>
			<Button type="button" onClick={onCancel}>
				cancel
			</Button>
		</div>
	);
}
