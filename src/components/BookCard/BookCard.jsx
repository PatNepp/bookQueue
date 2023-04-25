import React from 'react'
import { useDispatch } from 'react-redux'
import { Add } from '@mui/icons-material'
import { Card, CardContent, CardHeader, Box, Typography, Button, Divider } from '@mui/material'

import { addBook } from '../../features/bookActions'

const BookCard = ({ data }) => {
    const dispatch = useDispatch()

    const addBookToQueue = () => {
        dispatch(addBook(data)) 
    }

  return (
    <Card>
        <CardHeader 
            title={
                <Typography variant='h3'>
                    {data?.title}
                </Typography>
            }
            subheader={
                <Typography variant='subtitle1'>
                    {data?.authors[0]} | {data?.publishedDate && data.publishedDate.slice(0, 4)}
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
        {data?.imageLinks && (
            <img src={data?.imageLinks?.thumbnail} alt="" />
        )}
            <CardContent>
                <Typography variant="body1">
                    {data?.description}
                </Typography>   
            </CardContent>
        </Box>
    </Card>
  )
}

export default BookCard