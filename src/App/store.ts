import { configureStore } from '@reduxjs/toolkit';
import { editPersonReducer } from 'Features/edit-person';
import { filterPersonReducer } from 'Features/filter-person';
import { personsReducer } from 'Features/persons';

export const store = configureStore({
	reducer: {
		persons: personsReducer,
		editPerson: editPersonReducer,
		filterPerson: filterPersonReducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
