import { Modal } from 'Common/modal';
import { Persons } from 'Features/persons';
import React from 'react';

export function App() {
	return (
		<div>
			<Persons />
			<Modal title="modal">
				<div>AAA</div>
			</Modal>
		</div>
	);
}
