import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const { isDarkMode } = useTheme()

  return (
    <button
      className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-lg font-bold rounded
        transition-all duration-300 ease-in-out
        ${
          isDarkMode
            ? 'bg-gray-700 text-white hover:bg-gray-600 shadow-[3px_3px_6px_rgba(0,0,0,0.5),-3px_-3px_6px_rgba(255,255,255,0.1)]'
            : 'bg-gray-300 text-gray-800 hover:bg-gray-400 shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.5)]'
        }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
