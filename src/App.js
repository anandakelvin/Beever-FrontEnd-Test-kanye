import React from "react";

import { HomeView } from "./components";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

function App() {
	return (
		<Provider store={store}>
			<HomeView />
		</Provider>
	);
}

export default App;
