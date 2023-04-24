import { configureStore } from '@reduxjs/toolkit'
import { bookApi } from '../services/bookApi'
import titleOrAuthorReducer from '../features/currentTitleOrAuthor'
import bookActionsReducer from '../features/bookActions'

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        searchTitleOrAuthor: titleOrAuthorReducer,
        bookActions: bookActionsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
})