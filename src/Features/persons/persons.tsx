import React from 'react';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { startEditing } from 'Features/edit-person';
import { Person } from './person';
import { selectAllPersons } from './persons-slice';

export function Persons() {
	const dispatch = useAppDispatch();
	const persons = useAppSelector(selectAllPersons);

	const handleEditPerson = (id: string) => {
		dispatch(startEditing(id));
	};

	return (
		<ul className="flex flex-col space-y-5 bg-slate-400 px-10">
			{persons.map(person => (
				<Person key={person.id} {...person} onEdit={handleEditPerson} />
			))}
		</ul>
	);
}
