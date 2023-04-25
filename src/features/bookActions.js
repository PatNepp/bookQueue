import { createSlice } from "@reduxjs/toolkit";

export const bookActions = createSlice({
    name: 'bookActions',
    initialState: {
        searchQuery: '',
        bookQueue: [],
    },
    reducers: {
        searchBook: (state, action) => {
            state.searchQuery = action.payload;
        },
        addBook: (state, action) => {
            state.bookQueue = [ ...state.bookQueue, action.payload ]

            localStorage.setItem('queue', JSON.stringify(state.bookQueue))
        },
    }
})

export const { searchBook, addBook } = bookActions.actions;

export default bookActions.reducer;