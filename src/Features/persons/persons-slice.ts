import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Person } from '@Types/person';
import { AppState } from 'App/store';
import { selectPersonFilter } from 'Features/filter-person/filter-person-slice';
import mockData from 'Mocks/MOCK_DATA.json';

type Entities = Record<string, Person>;

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
	reducers: {
		savePerson: (state, action: PayloadAction<Person>) => {
			state.entities[action.payload.id] = action.payload;
		},
	},
});

export const selectPersonEntities = (state: AppState) => state.persons.entities;
const selectPersonIds = (state: AppState) => state.persons.ids;
export const selectAllPersons = createSelector(
	[selectPersonEntities, selectPersonIds, selectPersonFilter],
	(entities, ids, filter) =>
		ids
			.map(id => entities[id])
			.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
);

export const { savePerson } = personsSlice.actions;

export default personsSlice.reducer;
