import React from 'react'
import DarkModeToggle from './DarkModeToggle'

const Header: React.FC = () => {
  return (
    <>
      <div className='absolute top-4 right-4'>
        <DarkModeToggle />
      </div>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8'>
        Tic-Tac-Toe
      </h1>
    </>
  )
}

export default Header
