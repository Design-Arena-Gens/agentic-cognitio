'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) {
      setIsDarkMode(savedMode === 'true')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <main className={`${styles.main} ${isDarkMode ? styles.darkMode : ''}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello from Devin!</h1>
        <p className={styles.description}>
          A modern React app with responsive design
        </p>
        <button 
          className={styles.toggleButton}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </main>
  )
}
