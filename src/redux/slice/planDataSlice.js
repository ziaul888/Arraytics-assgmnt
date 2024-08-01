import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	planData: null,
	selectedOption: null,
};

// Action creators are generated for each case reducer function
export const planDataSlice = createSlice({
	name: "planData",
	initialState,
	reducers: {
		setPlanData: (state, action) => {
			state.planData = action.payload;
		},
		setSelectedOption:(state,action)=>{
			state.selectedOption=action.payload
		}
	},
});

export const { setPlanData,setSelectedOption } = planDataSlice.actions;

export default planDataSlice.reducer;
