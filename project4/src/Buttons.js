import React from 'react'

function Buttons({ onNumberClick, onOperationClick, onEqualClick, onClearClick }) {
  const buttonStyle = {
    height: '70px', 
    fontSize: '1.5rem',
    fontWeight: 'bold'
  }
  return (
    <div className="d-grid gap-2" style={{ width: '330px' }}>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(7)}>7</button>
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(8)}>8</button>
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(9)}>9</button>
        <button className="btn btn-warning flex-fill" style={buttonStyle} onClick={() => onOperationClick('/')}>/</button>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(4)}>4</button>
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(5)}>5</button>
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(6)}>6</button>
        <button className="btn btn-warning flex-fill" style={buttonStyle} onClick={() => onOperationClick('*')}>*</button>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(1)}>1</button>
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(2)}>2</button>
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(3)}>3</button>
        <button className="btn btn-warning flex-fill" style={buttonStyle} onClick={() => onOperationClick('-')}>-</button>
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-secondary flex-fill" style={buttonStyle} onClick={() => onNumberClick(0)}>0</button>
        <button className="btn btn-danger flex-fill" style={buttonStyle} onClick={onClearClick}>C</button>
        <button className="btn btn-success flex-fill" style={buttonStyle} onClick={onEqualClick}>=</button>
        <button className="btn btn-warning flex-fill" style={buttonStyle} onClick={() => onOperationClick('+')}>+</button>
      </div>
    </div>
  );
}
export default Buttons