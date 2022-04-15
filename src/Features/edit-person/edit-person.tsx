import React, { useRef } from 'react';
import { Input } from 'Common/input';
import { Modal } from 'Common/modal';
import { useAppDispatch, useAppSelector } from 'App/hooks';
import { cancelEditing, selectEditedPersonId } from './edit-person-slice';
import {
	savePerson,
	selectPersonEntities,
} from 'Features/persons/persons-slice';
import { Textarea } from 'Common/textarea';
import { Radio, RadioGroup, RadioGroupRef } from 'Common/radio-group';
import { type Person } from '@Types/person';

enum RadioValues {
	YES = 'yes',
	NO = 'no',
}

export function EditPerson() {
	const dispatch = useAppDispatch();
	const personEntities = useAppSelector(selectPersonEntities);
	const editedPersonId = useAppSelector(selectEditedPersonId);

	const nameRef = useRef<HTMLInputElement>(null);
	const registeredRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const addressRef = useRef<HTMLInputElement>(null);
	const aboutRef = useRef<HTMLTextAreaElement>(null);
	const radioGroup = useRef<RadioGroupRef>(null);

	const handleCancelEditing = () => {
		dispatch(cancelEditing());
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isActive = radioGroup.current?.getState() === RadioValues.YES;

		const person: Person = {
			id: editedPersonId,
			name: nameRef.current?.value || personEntities[editedPersonId].name,
			registered:
				registeredRef.current?.value ||
				personEntities[editedPersonId].registered,
			about: aboutRef.current?.value || personEntities[editedPersonId].about,
			email: emailRef.current?.value || personEntities[editedPersonId].email,
			address:
				addressRef.current?.value || personEntities[editedPersonId].address,
			age: Number(ageRef.current?.value || personEntities[editedPersonId].age),
			picture: personEntities[editedPersonId].picture,
			isActive,
		};

		dispatch(savePerson(person));
	};

	const editedPerson = personEntities[editedPersonId];

	if (!editedPerson) return null;

	return (
		<Modal>
			<form onSubmit={handleSubmit}>
				<Modal.Header>Edit Personal Information</Modal.Header>
				<Modal.Body>
					<Input
						ref={nameRef}
						label="name"
						defaultValue={editedPerson.name}
						type="text"
					/>
					<Input
						ref={registeredRef}
						label="registered"
						defaultValue={editedPerson.registered}
						type="date"
					/>
					<Input
						ref={ageRef}
						label="age"
						defaultValue={editedPerson.age}
						type="number"
					/>
					<Input
						ref={emailRef}
						label="email"
						defaultValue={editedPerson.email}
						type="email"
					/>
					<Input
						ref={addressRef}
						label="address"
						defaultValue={editedPerson.address}
						type="text"
					/>
					<Textarea
						ref={aboutRef}
						label="about"
						defaultValue={editedPerson.about}
					/>
					<RadioGroup
						ref={radioGroup}
						label="is active"
						defaultValue={
							editedPerson.isActive ? RadioValues.YES : RadioValues.NO
						}
					>
						<Radio color="green" value={RadioValues.YES} />
						<Radio color="red" value={RadioValues.NO} />
					</RadioGroup>
				</Modal.Body>
				<Modal.Footer onCancel={handleCancelEditing} />
			</form>
		</Modal>
	);
}
