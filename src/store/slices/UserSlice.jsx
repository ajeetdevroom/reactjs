import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        },
        removeUser(state,action){
            state.splice(action.payload,1)
            // state.pop(action.payload)
        },
        deleteUsers(state,action){}
    },
})

console.log(userSlice.state)
export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;