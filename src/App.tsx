import React from 'react'
import Game from './ui/Game'
import { ThemeProvider } from './contexts/ThemeContext'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Game />
    </ThemeProvider>
  )
}

export default App
