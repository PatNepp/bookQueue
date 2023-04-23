import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = import.meta.env.VITE_BOOK_API_KEY;
console.log(apiKey)

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1'}),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (searchQuery) => `volumes?q=${searchQuery}&key=${apiKey}`
        })
    })
})

export const { useGetBooksQuery } = bookApi