import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/quotes/quotesSlice.js";
import { getQuote, useGetQuoteQuery } from "../services/kanyeApi.js";

export default function KanyeQuoteView() {
	const { data: quote } = useGetQuoteQuery();
	const quotes = useSelector((state) => state.quotes.value);

	const dispatch = useDispatch();

	return (
		<section style={{ textAlign: "center" }}>
			<img
				src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
				alt="W3Schools.com"
				style={{ width: "300px" }}
			/>
			<h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>

			{quote ? <h3>{quote.quote}</h3> : null}

			<button
				onClick={() =>
					dispatch(getQuote.initiate(undefined, { forceRefetch: true }))
				}
			>
				Get Quote
			</button>
			<button onClick={() => dispatch(add(quote.quote))}>Add Favorite</button>

			{quotes.length === 0 ? null : (
				<ol>
					{quotes.map((e) => (
						<li key={e} style={{ listStyleType: "none" }}>
							{e}
						</li>
					))}
				</ol>
			)}
		</section>
	);
}
