import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme()

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-2 py-2 rounded-full transition-colors duration-200 ease-in-out
        ${
          isDarkMode
            ? 'bg-gray-800 text-white hover:bg-gray-900 shadow-theme-dark hover:shadow-theme-dark-hover'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 shadow-theme-light hover:shadow-theme-light-hover'
        }`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default DarkModeToggle
