import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './slices/UserSlice';

const store = configureStore({
    reducer:{
        users: UserSlice // given name of store
    },
})

export default store;