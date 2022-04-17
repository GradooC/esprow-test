import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from 'App/store';

const initialState = '';

const editPersonSlice = createSlice({
	name: 'personFilter',
	initialState,
	reducers: {
		changeFilter: (_state, action: PayloadAction<string>) => action.payload,
	},
});

export const selectPersonFilter = (state: AppState) => state.filterPerson;

export const { changeFilter } = editPersonSlice.actions;

export default editPersonSlice.reducer;
