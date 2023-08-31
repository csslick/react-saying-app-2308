import { useState } from 'react'

function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <p className="saying">명언...</p>
          <div className="date-info">
            <h3>요일</h3>
            <p>
              <span className="month">월</span>/
              <span className="date">일</span>
            </p>
          </div>
        </div>
        <div className="right">right</div>
      </div>
    </div>
  )
}

export default App
