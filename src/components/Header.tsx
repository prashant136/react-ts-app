import React, { useContext } from 'react'
import Button from './UI/Button'
import { useTimerContext } from '../context'

export default function Header() {
    const timerCtx = useTimerContext()
  return (
      <header>
          <h1>React+TS timer</h1>
          <Button> { timerCtx.isRunning ? 'Stop': 'Start'} Timer </Button>
    </header>
  )
}
