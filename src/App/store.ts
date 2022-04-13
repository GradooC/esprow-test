import { configureStore } from '@reduxjs/toolkit';
import personsReducer from 'Features/persons/persons-slice';

export const store = configureStore({
	reducer: {
		persons: personsReducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
