import React, { useState } from 'react'

import useStyles from './styles'
import { AppBar, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material'
import { LightMode, LightModeOutlined } from '@mui/icons-material'

const tabs = ['Your Queue', 'Add a Book']

const Navbar = () => {
    const { classes } = useStyles()
    const [colorMode, setColorMode] = useState('dark')

    const toggleColor = () => {
        setColorMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')
    }

  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo} variant='h1'>BookQ</Typography>
            <List className={classes.tabs}>
            {tabs.map((tab, i) => (
                <ListItemButton selected={tab === 'Your Queue' ? true : false} key={i} className={classes.listButton}>
                    <Typography variant='h4'>{tab}</Typography>
                </ListItemButton>
            ))}
            </List>
            <IconButton onClick={toggleColor}className={classes.lightModeIcon}>
                {colorMode === 'light' ? <LightMode /> : <LightModeOutlined />}
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar