import { TCell } from '../../helpers/board-generator';
import './Cell.css'

interface Props {
  cell: TCell
  handleClick: (cell: TCell) => void
}

function Cell({ cell, handleClick }: Props) {
  return (
    <div key={cell.id} className={`cell ${cell.isShown ? 'is-shown' : ''}`} onClick={() => handleClick(cell)}>
      <div className="text">{cell.hasBomb ? 'B': ''}</div>
    </div>
  )
}

export default Cell;