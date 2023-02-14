import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonal } from "../features/personalQuotes/personalQuotesSlice.js";

export default function PersonalQuoteView() {
	const quotes = useSelector((state) => state.personalQuotes.value);
	const [personalQuote, setPersonalQuote] = useState("");
	const dispatch = useDispatch();

	useEffect(() => {
		setPersonalQuote("");
	}, [quotes]);

	return (
		<section style={{ textAlign: "center", marginTop: "60px" }}>
			<hr style={{ maxWidth: "30%" }} />
			<h2>My Quotes</h2>
			<input
				value={personalQuote}
				onChange={(e) => setPersonalQuote(e.target.value)}
			/>

			<button onClick={() => dispatch(addPersonal(personalQuote))}>
				Submit
			</button>

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
