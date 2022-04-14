import React from 'react';
import { Input } from 'Common/input';
import { Modal } from 'Common/modal';
import { Person } from '@Types/person';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { cancelEditing, selectEditedPerson } from './edit-person-slice';
import isEmpty from 'lodash.isempty';

type EditPersonProps = Partial<Person>;

export function EditPerson({ name }: EditPersonProps) {
	const dispatch = useAppDispatch();
	const editedPerson = useAppSelector(selectEditedPerson);

	const handleCancelEditing = () => {
		dispatch(cancelEditing());
	};

	if (isEmpty(editedPerson)) return null;

	return (
		<Modal title="EditPerson" onCancel={handleCancelEditing}>
			<div>
				<Input label="name" />
			</div>
		</Modal>
	);
}
