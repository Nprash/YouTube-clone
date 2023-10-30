import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : "app",
    initialState : {
        isMenuOpen: true,
        istinyMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        iconMenu:(state)=>{
            state.istinyMenuOpen = true;
        }
    },
});

export const {toggleMenu, closeMenu, iconMenu} = appSlice.actions;
export default appSlice.reducer;