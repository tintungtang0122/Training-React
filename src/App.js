import "./App.scss";
import React from "react";
import createStore from "./store/createStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
	const { store, persistor } = createStore();
	return (
		<div className="App">
			<PersistGate loading={null} persistor={persistor}>
				<Provider store={store}>
					<Router />
				</Provider>
			</PersistGate>
		</div>
	);
}

export default App;
