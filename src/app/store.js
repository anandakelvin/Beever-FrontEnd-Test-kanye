import { configureStore } from "@reduxjs/toolkit";
import { kanyeApi } from "../services/kanyeApi.js";
import { quotesSlice } from "../features/quotes/quotesSlice.js";
import { personalQuotesSlice } from "../features/personalQuotes/personalQuotesSlice.js";

const reducer = {
	[kanyeApi.reducerPath]: kanyeApi.reducer,
	[quotesSlice.name]: quotesSlice.reducer,
	[personalQuotesSlice.name]: personalQuotesSlice.reducer,
};

export const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(kanyeApi.middleware),
	// 	{
	// 	serializableCheck: false,
	// }
});
