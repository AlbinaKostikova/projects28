import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './Display.js'
import Buttons from './Buttons.js'

function App() {
  const [currentValue, setCurrentValue] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleNumberClick = (num) => {
    if (waitingForOperand) {
      setCurrentValue(String(num))
      setWaitingForOperand(false)
    }
    else setCurrentValue(currentValue === '0' ? String(num) : currentValue + String(num))
  }
  const handleOperationClick = (op) => {
    if (previousValue === null) {
      setPreviousValue(currentValue)
    } else if (!waitingForOperand) {
      handleEqualClick()
      setPreviousValue(currentValue)
    }
    setOperation(op)
    setWaitingForOperand(true)
  }
  const handleEqualClick = () => {
    if (!operation || previousValue === null) return
    const prev = parseFloat(previousValue)
    const current = parseFloat(currentValue)
    let result = 0

    switch (operation) {
      case '+': result = prev + current; break
      case '-': result = prev - current; break
      case '/': result = current !== 0 ? prev / current : 'Error'; break
      case '*': result = prev * current; break
      default: return
    }
    setCurrentValue(String(result))
    setPreviousValue(String(null))
    setOperation(null)
  }
  const handleClearClick = () => {
    setCurrentValue('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Display value={currentValue} />
      <Buttons onNumberClick={handleNumberClick}
      onOperationClick={handleOperationClick}
      onEqualClick={handleEqualClick}
      onClearClick={handleClearClick}
      />
    </div>
  );
}

export default App;