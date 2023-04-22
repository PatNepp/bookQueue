import { Add } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardHeader, CardMedia, Box, Typography, Button, Divider } from '@mui/material'
import React from 'react'

const BookCard = ({ data }) => {
    
    const { volumeInfo } = data

  return (
    <Card >
        <CardHeader 
            title={
                <Typography variant='h3'>
                    {volumeInfo?.title}
                </Typography>
            }
            subheader={
                <Typography variant='subtitle1'>
                    {volumeInfo.authors[0]} | {volumeInfo?.publishedDate.slice(0, 4)}
                </Typography>
            }
            action={
                <Button>
                    <Add /><Typography variant='button'>Add</Typography>
                </Button>
            }
        />
        <Divider />
        <Box display='flex'>
        {volumeInfo.imageLinks && (
            <img src={volumeInfo?.imageLinks.thumbnail} alt="" />
        )}
            <CardContent>
                <Typography variant="body1">
                    {volumeInfo.description}
                </Typography>   
            </CardContent>
        </Box>
    </Card>
  )
}

export default BookCard