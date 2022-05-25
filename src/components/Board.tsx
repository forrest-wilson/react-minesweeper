import { useState } from "react";
import { generateBoard, TCell } from "../helpers/board-generator";
import './Board.css'

function Board() {
  const numRows = 10
  const numCols = 10
  const numBombs = 10

  const [board, setBoard] = useState(generateBoard(numRows, numCols, numBombs))

  const handleClick = (cell: TCell) => {
    const copy = [...board]

    let found = copy[cell.row][cell.column]
    found.isShown = true

    copy[cell.row].splice(cell.column, 1, found)

    setBoard(copy)
  }

  return (
    <div className="board">
      {board.map((row, i) => {
        return <div className="row" key={i}>
          {
            row.map(cell => <div key={cell.id} className={`cell ${cell.isShown ? 'is-shown' : ''}`} onClick={() => handleClick(cell)}>
              <div className="text">{cell.hasBomb ? 'B': ''}</div>
            </div>)
          }
        </div>
      })}
    </div>
  );
}

export default Board;