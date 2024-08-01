import { combineReducers } from "@reduxjs/toolkit";
import planDataReducer from "../slice/planDataSlice"
const exampleReducer = (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

//register all reducers here
export const rootReducer = combineReducers({
	planData:planDataReducer,
	
});