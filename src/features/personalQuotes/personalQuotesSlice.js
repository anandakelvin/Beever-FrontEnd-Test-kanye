import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const personalQuotesSlice = createSlice({
	initialState,
	name: "personalQuotes",
	reducers: {
		addPersonal(state, action) {
			if (state.value.find((e) => e === action.payload)) {
				return;
			}
			state.value.push(action.payload);
		},
	},
});

export const { addPersonal } = personalQuotesSlice.actions;
