import React from 'react'
import { useDispatch } from 'react-redux'
import { Add } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Box, Typography, Button, Divider } from '@mui/material'

import { addBook } from '../../features/bookActions'

const BookCard = ({ data }) => {
    const { volumeInfo } = data
    const dispatch = useDispatch()
    console.log('bookcard', volumeInfo)
    const arr = JSON.parse(localStorage.getItem('queue'))
    console.log(arr)

    const addBookToQueue = () => {
        dispatch(addBook(volumeInfo))
        
    }

  return (
    <Card>
        <CardHeader 
            title={
                <Typography variant='h3'>
                    {volumeInfo?.title}
                </Typography>
            }
            subheader={
                <Typography variant='subtitle1'>
                    {volumeInfo?.authors[0]} | {volumeInfo?.publishedDate.slice(0, 4)}
                </Typography>
            }
            action={
                <Button
                    onClick={addBookToQueue}
                >
                    <Add /><Typography variant='button'>Add</Typography>
                </Button>
            }
        />
        <Divider />
        <Box display='flex'>
        {volumeInfo?.imageLinks && (
            <img src={volumeInfo?.imageLinks?.thumbnail} alt="" />
        )}
            <CardContent>
                <Typography variant="body1">
                    {volumeInfo?.description}
                </Typography>   
            </CardContent>
        </Box>
    </Card>
  )
}

export default BookCard