import { configureStore } from '@reduxjs/toolkit';
import { personsReducer } from 'Features/persons';

export const store = configureStore({
	reducer: {
		persons: personsReducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
