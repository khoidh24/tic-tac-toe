import React, { useState } from 'react'
import Container from './Container'
import Header from './Header'
import GameBoard from '../features/GameBoard'
import GameStatus from './GameStatus'
import Button from './Button'
import { Player, BoardState } from '../types'

const initialBoard: BoardState = Array(9).fill(null)

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Game: React.FC = () => {
  const [board, setBoard] = useState<BoardState>(initialBoard)
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X')
  const [winner, setWinner] = useState<Player | 'Draw' | null>(null)
  const [clickedCells, setClickedCells] = useState<boolean[]>(
    Array(9).fill(false)
  )

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = currentPlayer
    setBoard(newBoard)

    const newClickedCells = [...clickedCells]
    newClickedCells[index] = true
    setClickedCells(newClickedCells)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner('Draw')
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }
  }

  const checkWinner = (board: BoardState): Player | null => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as Player
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setCurrentPlayer('X')
    setWinner(null)
    setClickedCells(Array(9).fill(false))
  }

  return (
    <Container>
      <Header />
      <GameBoard
        board={board}
        clickedCells={clickedCells}
        handleClick={handleClick}
        winner={winner}
      />
      <GameStatus winner={winner} currentPlayer={currentPlayer} />
      <Button onClick={resetGame}>Restart Game</Button>
    </Container>
  )
}

export default Game
