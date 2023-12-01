import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name:"CardSlice",
    initialState:{
        cards:[]
    },
    reducers:{
        addCard(state,action){
                state.cards.push(action.payload)    
        },  
        deleteCard(state,action){
            state.cards.filter(el=>el.id != action.payload)
        },
    }
})
export const{addCard,deleteCard} = CardSlice.actions
export default CardSlice.reducer