import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { startEditing } from 'Features/edit-person';
import { Person } from './person';
import { selectAllPersons } from './persons-slice';

export function Persons() {
	const dispatch = useAppDispatch();
	const persons = useAppSelector(selectAllPersons);

	const handleEditPerson = useCallback((id: string) => {
		dispatch(startEditing(id));
	}, [dispatch]);

	return (
		<ul className="flex flex-col space-y-5 bg-slate-400 px-10 py-4">
			{persons.map(person => (
				<Person key={person.id} {...person} onEdit={handleEditPerson} />
			))}
		</ul>
	);
}
