import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";

const store = configureStore({
    reducer:{
        card:CardSlice
    }
})

export default store