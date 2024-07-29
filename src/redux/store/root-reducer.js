import { combineReducers } from "@reduxjs/toolkit";

const exampleReducer = (state = {}, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

//register all reducers here
export const rootReducer = combineReducers({
	example: exampleReducer,
	
});