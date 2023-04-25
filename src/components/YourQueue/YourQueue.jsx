import React from 'react'
import { Typography } from '@mui/material'

import useStyles from './styles'
import BookCard from '../BookCard/BookCard'


const YourQueue = () => {
    const { classes } = useStyles()
    const bookQueue = JSON.parse(localStorage.getItem('queue'))
    console.log(bookQueue)

  return (
    <div>
        {
            bookQueue ? (
                bookQueue.map((book, i) => (
                    <BookCard key={i} data={book} />
                ))
            ) : (
                <Typography variant='h2'>Add to your Queue!</Typography>
            )
        }
    </div>
  )
}

export default YourQueue