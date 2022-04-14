import React from 'react';
import { EditPerson } from 'Features/edit-person';
import { Persons } from 'Features/persons';

export function App() {
	return (
		<>
			<Persons />
			<EditPerson />
		</>
	);
}
