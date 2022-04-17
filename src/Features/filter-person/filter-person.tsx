import React from 'react';
import { useAppDispatch } from 'App/hooks';
import { Input } from 'Common/input';
import { changeFilter } from './filter-person-slice';
import { ReactComponent as SearchIcon } from 'Icons/search.svg';

export function FilterPerson() {
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeFilter(e.target.value));
	};

	return (
		<div className="flex space-x-2">
			<Input type="text" onChange={handleChange} />
			<SearchIcon width={20} fill="white" />
		</div>
	);
}
