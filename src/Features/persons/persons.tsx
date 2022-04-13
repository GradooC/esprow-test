import React from 'react';
import { useSelector } from 'react-redux';
import { Person } from './person';
import { selectAllPersons } from './persons-slice';

export function Persons() {
	const persons = useSelector(selectAllPersons);
	return (
		<ul className="flex flex-col space-y-5 bg-slate-400 px-10">
			{persons.map(person => (
				<Person key={person.id} {...person} />
			))}
		</ul>
	);
}
