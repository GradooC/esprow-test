import React from 'react';
import { Button } from 'Common/button';

type ModalFooterProps = {
	onCancel: () => void;
};

export function ModalFooter({ onCancel }: ModalFooterProps) {
	return (
		<div className="flex space-x-2">
			<Button type="submit">submit</Button>
			<Button type="button" onClick={onCancel}>
				cancel
			</Button>
		</div>
	);
}
