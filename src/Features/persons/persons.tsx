import React from 'react';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { startEditing } from 'Features/edit-person';
import { Person } from './person';
import { selectAllPersons, selectPersonEntities } from './persons-slice';

export function Persons() {
	const dispatch = useAppDispatch();
	const persons = useAppSelector(selectAllPersons);
	const personEntities = useAppSelector(selectPersonEntities);

	const handleEditPerson = (id: string) => {
		dispatch(startEditing(personEntities[id]));
	};

	return (
		<ul className="flex flex-col space-y-5 bg-slate-400 px-10">
			{persons.map(person => (
				<Person key={person.id} {...person} onEdit={handleEditPerson} />
			))}
		</ul>
	);
}
