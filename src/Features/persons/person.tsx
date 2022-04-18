import React, { memo } from 'react';
import { type Person as PersonType } from '@Types/person';
import { ReactComponent as EditIcon } from 'Icons/edit.svg';
import { IconButton } from 'Common/icon-button';
import { Image } from 'Common/image';

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
		picture,
		onEdit,
	}: PersonProps) => {
		const handlePersonClick = () => {
			onEdit(id);
		};

		const indicatorColor = isActive ? 'bg-green-400' : 'bg-red-400';

		return (
			<li className="rounded-md bg-white p-5 max-w-4xl min-w-min w-full shadow-lg flex">
				<Image src={picture} alt="avatar" />
				<div className="flex flex-col w-full">
					<div className="flex items-center justify-between">
						<h4 className="text-2xl">{name}</h4>
						<span
							className={`${indicatorColor} ml-3 w-4 h-4 rounded-full relative`}
						>
							<span
								className={`${indicatorColor} w-4 h-4 rounded-full absolute inset-0 blur-sm`}
							/>
						</span>
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
				</div>
			</li>
		);
	}
);
