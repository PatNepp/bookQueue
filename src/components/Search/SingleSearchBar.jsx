import React, {useState} from 'react'

import useStyles from './styles'
import { InputAdornment, TextField } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { searchBook } from '../../features/currentTitleOrAuthor'

const Search = () => {
    const { classes } = useStyles()
    const [searchQuery, setSearchQuery] = useState('')
    const dispatch = useDispatch()
    console.log(searchQuery)
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            console.log('dispatch', searchQuery)
            dispatch(searchBook(searchQuery))
        }
    }

  return (
    <TextField 
        onKeyPress={handleKeyPress}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        variant='outlined'
        InputProps={{
            startAdornment: (
                <InputAdornment position='end'>
                    <SearchOutlined />
                </InputAdornment>
            )
        }}
    />
  )
}

export default Search