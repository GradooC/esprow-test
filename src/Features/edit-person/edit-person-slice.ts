import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '@Types/person';
import { AppState } from 'App/store';

type StartEditingPayload = Person;

const initialState = {};

const editPersonSlice = createSlice({
	name: 'editPerson',
	initialState,
	reducers: {
		startEditing: (_state, action: PayloadAction<StartEditingPayload>) =>
			action.payload,
		cancelEditing: () => initialState,
	},
});

export const selectEditedPerson = (state: AppState) => state.editPerson;

export const { startEditing, cancelEditing } = editPersonSlice.actions;

export default editPersonSlice.reducer;
