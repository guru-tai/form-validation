import { createSlice } from "@reduxjs/toolkit";

const initialState={
    drives:[],
}

const drivesSlice=createSlice({
    name:'drives',
    initialState,
    reducers:{
        addDrives(state,action){
            state.drives.push(action.payload);
        },
    }
})
export const {addDrives}=drivesSlice.actions;
export default drivesSlice.reducer;