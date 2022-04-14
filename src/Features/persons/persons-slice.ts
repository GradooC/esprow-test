import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AppState } from 'App/store';
import mockData from 'Mocks/MOCK_DATA.json';

type Entities = Record<string, typeof mockData[number]>;

const byId = mockData.reduce((acc, person) => {
	acc[person.id] = person;
	return acc;
}, {} as Entities);

const initialState = {
	entities: byId,
	ids: Object.keys(byId),
};

const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {},
});

export const selectPersonEntities = (state: AppState) => state.persons.entities;
const selectPersonIds = (state: AppState) => state.persons.ids;
export const selectAllPersons = createSelector(
	[selectPersonEntities, selectPersonIds],
	(entities, ids) => ids.map(id => entities[id])
);

export default personsSlice.reducer;
