import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Player } from '../types'

interface GameStatusProps {
  winner: Player | 'Draw' | null
  currentPlayer: Player
}

const GameStatus: React.FC<GameStatusProps> = ({ winner, currentPlayer }) => {
  const { isDarkMode } = useTheme()

  const getPlayerColor = (player: Player | 'Draw' | null) => {
    if (player === 'X') {
      return isDarkMode ? 'text-blue-400' : 'text-blue-600'
    } else if (player === 'O') {
      return isDarkMode ? 'text-red-400' : 'text-red-600'
    }
    return isDarkMode ? 'text-gray-400' : 'text-gray-600'
  }

  if (winner) {
    return (
      <div
        className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-center ${getPlayerColor(
          winner
        )}`}
      >
        {winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`}
      </div>
    )
  }

  return (
    <div
      className={`text-base sm:text-lg md:text-xl mb-2 sm:mb-3 md:mb-4 text-center ${getPlayerColor(
        currentPlayer
      )}`}
    >
      Current player: {currentPlayer}
    </div>
  )
}

export default GameStatus
