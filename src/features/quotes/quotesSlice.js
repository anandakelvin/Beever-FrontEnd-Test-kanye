import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: [],
};

export const quotesSlice = createSlice({
	initialState,
	name: "quotes",
	reducers: {
		add(state, action) {
			if (state.value.find((e) => e === action.payload)) {
				return;
			}
			state.value.push(action.payload);
		},
	},
});

export const { add } = quotesSlice.actions;
