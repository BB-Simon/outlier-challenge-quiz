import React from 'react'
import { ThemeProvider } from 'styled-components';
import './App.css'
import Quiz from './Home';
import { theme } from './theme';

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Quiz />
      </div>
    </ThemeProvider>
  )
}

export default App
