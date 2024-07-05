import React from 'react'
import '../styles/Navbar.module.css'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggleBtn from './ThemeToggleBtn'
import stylesTogg from '../styles/themeToggleBtn.module.css'

const Navbar = (props) => {
  const { theme, toggleTheme } = useTheme()

  const handleClick = () => {
    toggleTheme()
    props.func()
  }


  return (
    <nav>
      <span className='text-highlight'>NeuroHub</span>
      {/* <button onClick={toggleTheme} className='btn-primary'>{theme === 'light' ? 'Dark' : 'Light'} Theme</button> */}
      <div>
        <label className={stylesTogg.switch}>
          &nbsp;
          <input defaultChecked={theme === 'light'} onClick={handleClick} type="checkbox" name="" id="checkbox" />
          <span className={theme === 'dark' ? stylesTogg.sliderDark : stylesTogg.sliderLight}>
            <span className={theme === 'dark' ? stylesTogg.innerSliderDark : stylesTogg.innerSliderLight}></span>
          </span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar