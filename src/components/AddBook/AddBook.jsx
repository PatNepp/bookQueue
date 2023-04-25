import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import { BookCard, SingleSearchBar } from '..'
import { useGetBooksQuery } from '../../services/bookApi'

const AddBook = () => { 
    const {searchQuery} = useSelector((state) => state.searchTitleOrAuthor)
    const { data } = useGetBooksQuery(searchQuery)

  return (
    <div>
        <SingleSearchBar />
        {searchQuery === '' ? (
          <Typography variant='h1'>Search for a New Book!</Typography>
        ) : (
          data?.items.map((item, i) => (
            <BookCard key={i} data={item.volumeInfo} />
          ))
        )}     
    </div>
  )
}

export default AddBook