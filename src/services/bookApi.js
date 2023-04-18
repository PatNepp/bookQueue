import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiKey = import.meta.env.VITE_BOOK_API_KEY;
console.log(apiKey)

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1'}),
    endpoints: (builder) => ({
        getBooksByTitle: builder.query({
            query: (search) => `volumes?q=${search}&key=${apiKey}`
        })
    })
})

export const { useGetBooksByTitleQuery } = bookApi