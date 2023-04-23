import { createSlice } from "@reduxjs/toolkit";

export const titleOrAuthor = createSlice({
    name: 'titleOrAuthor',
    initialState: {
        searchQuery: '',
    },
    reducers: {
        searchBook: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
})

export const { searchBook } = titleOrAuthor.actions;

export default titleOrAuthor.reducer;