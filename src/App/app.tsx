import React from 'react';
import { EditPerson } from 'Features/edit-person';
import { Persons } from 'Features/persons';
import { Header } from 'Common/header';
import { FilterPerson } from 'Features/filter-person';
import { Body } from 'Common/body';

export function App() {
	return (
		<>
			<Header>
				<FilterPerson />
			</Header>
			<Body>
				<Persons />
				<EditPerson />
			</Body>
		</>
	);
}
