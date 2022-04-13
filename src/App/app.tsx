import React from 'react';
import { useAppSelector } from './hooks';

export function App() {
	const persons = useAppSelector(state => state.persons);
	return <div>{persons.ids}</div>;
}
