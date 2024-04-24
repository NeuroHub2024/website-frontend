import { useEffect, useState } from 'react'
import Home from './pages/Home'
import { ThemeProvider } from './contexts/ThemeContext'
import AppRouter from './utils/AppRouter'

function App() {

  useEffect(() => {
    const displayTheme = localStorage.getItem('display-theme')
    if(!displayTheme){
      localStorage.setItem('display-theme', 'light')
      document.body.setAttribute('data-theme', 'light')
    }else{
      document.body.setAttribute('data-theme', displayTheme)
    }
  }, [])

  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
