import { useEffect, useState } from "react";
import { generateBoard, TCell } from "../../helpers/board-generator";
import Cell from "../cell/Cell";
import './Board.css'

function Board() {
  const numRows = 10
  const numCols = 10
  const numBombs = 10

  const [board, setBoard] = useState(generateBoard(numRows, numCols, numBombs))

  let rows = [...Array(numRows)].map((_, i) => {
    return board.filter(val => val.row === i)
  })

  const handleClick = (cell: TCell) => {
    const copy = [...board]

    const foundIndex = copy.findIndex(c => c.id === cell.id)
    copy[foundIndex].isShown = true

    copy.splice(foundIndex, 1, copy[foundIndex])

    setBoard(copy)
  }

  useEffect(() => {
    if (board.some(cell => cell.hasBomb && cell.isShown)) {
      // TODO: stop the game and notify the user that they lost
      alert('Game over!')
      setBoard(generateBoard(numRows, numCols, numBombs))
    }
  }, [board])

  return (
    <div className="board">
      {rows.map((row, i) => {
        return (
          <div className="row" key={i}>
            {row.map(cell => <Cell cell={cell} handleClick={handleClick} />)}
          </div>
        )
      })}
    </div>
  );
}

export default Board;