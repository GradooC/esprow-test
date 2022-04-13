import { createSlice } from '@reduxjs/toolkit';
import mockData from 'Mocks/MOCK_DATA.json';

type Entities = Record<string, typeof mockData[number]>

const byId = mockData.reduce(
	(acc, person) => ({ ...acc, [person.id]: person }),
	{} as Entities
);

const initialState = {
	entities: byId,
	ids: Object.keys(byId),
};

export const personsSlice = createSlice({
	name: 'persons',
	initialState,
	reducers: {},
});

export default personsSlice.reducer;
