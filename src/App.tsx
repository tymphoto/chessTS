import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';
import './styles/App.css';

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
  }, [])

  function restart () {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigurs()
    setBoard(newBoard)
  }

  return (
    <div className="App">
      <BoardComponent 
      board={board} 
      setBoard={setBoard}
      />
    </div>
  );
}

export default App;
