import React, { useEffect, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import styles from '../styles/themeToggleBtn.module.css'

const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <label className={styles.switch}>
      &nbsp;
      <input defaultChecked={theme === 'light'} onClick={toggleTheme} type="checkbox" name="" id="checkbox" />
      <span className={theme === 'dark' ? styles.sliderDark : styles.sliderLight}>
        <span className={theme === 'dark' ? styles.innerSliderDark : styles.innerSliderLight}></span>
      </span>
    </label>
  )
}

export default ThemeToggleBtn