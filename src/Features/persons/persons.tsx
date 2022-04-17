import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { startEditing } from 'Features/edit-person';
import { Person } from './person';
import { selectAllPersons } from './persons-slice';

export function Persons() {
	const dispatch = useAppDispatch();
	const persons = useAppSelector(selectAllPersons);

	const handleEditPerson = useCallback(
		(id: string) => {
			dispatch(startEditing(id));
		},
		[dispatch]
	);

	return persons.length > 0 ? (
		<ul className="flex flex-col items-center space-y-5 pb-8">
			{persons.map(person => (
				<Person key={person.id} {...person} onEdit={handleEditPerson} />
			))}
		</ul>
	) : (
		<h1 className="text-6xl text-gray-100 text-center">No Persons Found</h1>
	);
}
