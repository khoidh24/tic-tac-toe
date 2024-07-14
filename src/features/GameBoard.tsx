import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { BoardState, Player } from '../types'

interface GameBoardProps {
  board: BoardState
  clickedCells: boolean[]
  handleClick: (index: number) => void
  winner: Player | 'Draw' | null
}

const GameBoard: React.FC<GameBoardProps> = ({
  board,
  clickedCells,
  handleClick,
  winner
}) => {
  const { isDarkMode } = useTheme()

  const getPlayerColor = (player: Player | null) => {
    if (player === 'X') {
      return isDarkMode ? 'text-blue-400' : 'text-blue-600'
    } else if (player === 'O') {
      return isDarkMode ? 'text-red-400' : 'text-red-600'
    }
    return isDarkMode ? 'text-gray-400' : 'text-gray-600'
  }

  return (
    <div className='grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8'>
      {board.map((cell, index) => (
        <button
          key={index}
          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-xl sm:text-2xl md:text-4xl font-bold flex items-center justify-center rounded
              transition-shadow duration-300 linear
              ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                  : 'bg-white border-gray-300 hover:bg-gray-100'
              }
              ${
                clickedCells[index]
                  ? isDarkMode
                    ? 'shadow-neu-pressed-dark'
                    : 'shadow-neu-pressed'
                  : isDarkMode
                  ? 'shadow-neu-raised-dark'
                  : 'shadow-neu-raised'
              }
              ${getPlayerColor(cell)}`}
          onClick={() => handleClick(index)}
          disabled={!!cell || !!winner}
        >
          {cell}
        </button>
      ))}
    </div>
  )
}

export default GameBoard
