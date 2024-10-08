import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
//store.js
export default configureStore({
	reducer: rootReducer,
});