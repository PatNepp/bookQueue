import { configureStore } from '@reduxjs/toolkit'
import { bookApi } from '../services/bookApi'
import titleOrAuthorReducer from '../features/currentTitleOrAuthor'

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        searchTitleOrAuthor: titleOrAuthorReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
})