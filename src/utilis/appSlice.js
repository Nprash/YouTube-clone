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
        closeiconMenu:(state)=>{
            state.istinyMenuOpen = false;
        }
    },
});

export const {toggleMenu, closeMenu, closeiconMenu} = appSlice.actions;
export default appSlice.reducer;