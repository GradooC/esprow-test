import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'App/store';
import { savePerson } from 'Features/persons';

const initialState = '';

const editPersonSlice = createSlice({
	name: 'editPerson',
	initialState,
	reducers: {
		startEditing: (_state, action: PayloadAction<string>) => action.payload,
		cancelEditing: () => initialState,
	},
	extraReducers: (builder) => {
		builder.addCase(savePerson, () => initialState);
	},
});

export const selectEditedPersonId = (state: AppState) => state.editPerson;

export const { startEditing, cancelEditing } = editPersonSlice.actions;

export default editPersonSlice.reducer;
