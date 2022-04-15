import React, { memo } from 'react';
import { type Person as PersonType } from '@Types/person';
import { ReactComponent as EditIcon } from 'Icons/edit.svg';
import { IconButton } from 'Common/icon-button';

type PersonProps = PersonType & { onEdit: (id: string) => void };

export const Person = memo(
	({
		id,
		isActive,
		age,
		name,
		email,
		address,
		about,
		registered,
		onEdit,
	}: PersonProps) => {
		const handlePersonClick = () => {
			onEdit(id);
		};

		return (
			<li className="rounded-md bg-white p-5">
				<div className="flex items-center justify-between">
					<h4 className="text-2xl">{name}</h4>
					<div
						className={`${
							isActive ? 'bg-green-400' : 'bg-red-400'
						} ml-3 w-4 h-4 rounded-full`}
					/>
					<p className="text-sm text-gray-400 mr-auto ml-3">
						{new Date(registered).toDateString()}
					</p>
					<IconButton onClick={handlePersonClick}>
						<EditIcon width={30} />
					</IconButton>
				</div>
				<p>
					<strong>Age:&nbsp;</strong>
					{age}
				</p>
				<p>
					<strong>Email:&nbsp;</strong>
					{email}
				</p>
				<p>
					<strong>Address:&nbsp;</strong>
					{address}
				</p>
				<div className="flex">
					<strong>About:&nbsp;</strong>
					<p>{about}</p>
				</div>
			</li>
		);
	}
);
