import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { isDarkMode } = useTheme()

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300 ease-in-out
      ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
    >
      {children}
    </div>
  )
}

export default Container
