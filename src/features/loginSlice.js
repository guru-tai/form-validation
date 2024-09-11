import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isAuthenticate:false,
    userType:null,
    loading:false,
    error:null
}

const loginSlice=createSlice({
    name:'validate',
    initialState,
    reducers:{
        loginRequest(state){
            state.loading=true;
            state.error=false
        },
        loginSuccess(state,action){
            state.loading=false;
            state.isAuthenticate=true;
            state.userType=action.payload.role;
            state.error=null;
        },
        loginFailure(state,action){
            state.loading=false;
            state.error=action.payload;
        },
        clearState(state,_action) {
            state.isAuthenticate=false;
            state.userType = null; 
            state.error = null; 
        }
    }
})

export const {loginRequest,loginFailure,loginSuccess, clearState}=loginSlice.actions;
export default loginSlice.reducer;