import { Card, CardActions, CardContent, CardHeader, CardMedia, Box, Typography } from '@mui/material'
import React from 'react'

const BookCard = ({ data }) => {
    
    const { volumeInfo } = data

  return (
    <Card>
        <CardHeader 
            title={<Typography variant='h4'>{volumeInfo?.title}</Typography>}
            subheader={<Typography variant='subtitle1'>{volumeInfo.authors[0]} | {volumeInfo?.publishedDate}</Typography>}
        />
        <Box display='flex'>
        {volumeInfo.imageLinks && (
            <img src={volumeInfo?.imageLinks.thumbnail} alt="" srcset="" />
        )}
            <CardContent>
                <Typography variant="body1">
                    {volumeInfo.description}
                </Typography>   
            </CardContent>
        </Box>
        <CardActions>

        </CardActions>
    </Card>
  )
}

export default BookCard