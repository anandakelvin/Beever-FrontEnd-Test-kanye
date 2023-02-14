import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kanyeApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.kanye.rest",
	}),
	endpoints: (builder) => ({
		getQuote: builder.query({
			query: () => "/",
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQuoteQuery, useLazyGetQuoteQuery } = kanyeApi;

export const { getQuote } = kanyeApi.endpoints;
