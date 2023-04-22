import React from 'react'
import {BookCard, Search} from '..'
import { useGetBooksQuery } from '../../services/bookApi'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

const YourQueue = () => { 
    const {searchQuery} = useSelector((state) => state.searchTitleOrAuthor)
    console.log(searchQuery)
    const {data} = useGetBooksQuery(searchQuery)

  return (
    <div>
        <Search />
        {searchQuery === '' ? (
          <Typography variant='h1'>Search for a New Book!</Typography>
        ) : (
          data?.items.map((item, i) => (
            <BookCard key={i} data={item} />
          ))
        )}
        
    </div>
  )
}

export default YourQueue