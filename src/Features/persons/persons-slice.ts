import { createSelector, createSlice } from '@reduxjs/toolkit';
import { AppState } from 'App/store';
import mockData from 'Mocks/MOCK_DATA.json';

type Entities = Record<string, typeof mockData[number]>;

const byId = mockData.reduce(
	(acc, person) => ({ ...acc, [person.id]: person }),
	{} as Entities
);

const initialState = {
	entities: byId,
	ids: Object.keys(byId),
};

const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {},
});

const selectPersonsEntities = (state: AppState) => state.persons.entities;
const selectPersonsIds = (state: AppState) => state.persons.ids;
export const selectAllPersons = createSelector(
	[selectPersonsEntities, selectPersonsIds],
	(entities, ids) => ids.map(id => entities[id])
);

export default personsSlice.reducer;
