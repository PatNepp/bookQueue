import React, { useState } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { AppBar, IconButton, List, ListItemButton, Toolbar, Typography } from '@mui/material'
import { LightMode, LightModeOutlined } from '@mui/icons-material'

import useStyles from './styles'

const tabs = [
    {tab: 'Your Queue', value:'/'},
    {tab: 'Add a Book', value: '/add'},
    {tab: 'Completed', value: '/completed'}
]

const Navbar = () => {
    const { classes } = useStyles()
    const [colorMode, setColorMode] = useState('dark')
    const location = useLocation()

    const toggleColor = () => {
        setColorMode((prevMode) => prevMode === 'light' ? 'dark' : 'light')
    }

  return (
    <>
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography className={classes.logo} variant='h1'>BookQ</Typography>
            <List className={classes.tabs}>
            {tabs.map(({tab, value}) => (
                <Link to={value} className={classes.link} key={value}>
                    <ListItemButton selected={location.pathname === value ? true : false} divider className={classes.listButton}>
                        <Typography variant='h4'>{tab}</Typography>
                    </ListItemButton>
                </Link>
            ))}
            </List>
            <IconButton onClick={toggleColor}className={classes.lightModeIcon}>
                {colorMode === 'light' ? <LightMode /> : <LightModeOutlined />}
            </IconButton>
        </Toolbar>
    </AppBar>
    <Toolbar />
    <Outlet />
    </>
  )
}

export default Navbar