import React from 'react';
import { type Person as PersonType } from '@Types/person';
import { ReactComponent as EditIcon } from 'Icons/edit.svg';
import { IconButton } from 'Common/icon-button';

type PersonProps = PersonType & { onEdit: (id: string) => void };

export function Person({
	id,
	isActive,
	picture,
	age,
	name,
	email,
	address,
	about,
	onEdit,
}: PersonProps) {
	const handlePersonClick = () => {
		onEdit(id);
	};

	return (
		<li className="rounded-md bg-white p-5">
			<div className="flex items-center justify-between">
				<h4 className="text-2xl">{name}</h4>
				<IconButton onClick={handlePersonClick}>
					<EditIcon width={30} />
				</IconButton>
			</div>
			<p>
				<b>Age:&nbsp;</b>
				{age}
			</p>
			<p>
				<b>Email:&nbsp;</b>
				{email}
			</p>
			<p>
				<b>Address:&nbsp;</b>
				{address}
			</p>
			<div className="flex">
				<b>About:&nbsp;</b>
				<p>{about}</p>
			</div>
			<p
				className={`${
					isActive ? 'text-green-600' : 'text-red-600'
				} capitalize text-center`}
			>
				{isActive ? 'active' : 'inactive'}
			</p>
		</li>
	);
}
