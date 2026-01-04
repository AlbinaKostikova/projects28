import React from 'react'

function Display({ value }) {
  return (
    <div
      className="border rounded p-3 mb-3 text-end"
      style={{ width: '330px', fontSize: '3rem', backgroundColor: '#f0f0f0', boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
      }}
    >
      {value}
    </div>
  );
}

export default Display