import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: ""
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        clearCategory: (state, action) => {
            state.selectedCategory = "";
        }
    }
});

export const {setSelectedCategory, clearCategory} = categorySlice.actions;

export default categorySlice.reducer