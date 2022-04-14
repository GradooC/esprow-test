import React from 'react';
import { Input } from 'Common/input';
import { Modal } from 'Common/modal';
import { Person } from '@Types/person';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { cancelEditing, selectEditedPersonId } from './edit-person-slice';
import isEmpty from 'lodash.isempty';

type EditPersonProps = Partial<Person>;

export function EditPerson({ name }: EditPersonProps) {
	const dispatch = useAppDispatch();
	const editedPersonId = useAppSelector(selectEditedPersonId);

	if (isEmpty(editedPersonId)) return null;

	const handleCancelEditing = () => {
		dispatch(cancelEditing());
	};

	return (
		<Modal title="EditPerson" onCancel={handleCancelEditing}>
			<div>
				<Input label="name" />
			</div>
		</Modal>
	);
}
