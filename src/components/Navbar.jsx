import React from 'react'
import styles from '../styles/Navbar.module.css'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
    const {theme, toggleTheme} = useTheme()

  return (
    <nav>
        <span className='text-highlight'>NeuroHub</span>
        <button onClick={toggleTheme} className='btn-primary'>{theme === 'light' ? 'Dark' : 'Light'} Theme</button>
    </nav>
  )
}

export default Navbar