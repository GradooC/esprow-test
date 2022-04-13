import React from 'react';

type PersonProps = {
	id: string;
	isActive: boolean;
	picture: string;
	age: number;
	name: string;
	email: string;
	address: string;
	about: string;
};

export function Person({
	id,
	isActive,
	picture,
	age,
	name,
	email,
	address,
	about,
}: PersonProps) {
	return (
		<li className="rounded-md bg-white p-5">
			<h4 className="text-center text-xl">{name}</h4>
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
			<p className={`${isActive ? 'text-green-600' : 'text-red-600'} capitalize text-center`}>
				{isActive ? 'active' : 'inactive'}
			</p>
		</li>
	);
}
