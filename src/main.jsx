import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from "react-router-dom";
import {Provider } from 'react-redux'

import {lightTheme} from './theme'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider> 
  </Provider>,
)
