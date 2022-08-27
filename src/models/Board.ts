import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Bishop } from "./figures/Bishop";
import { Pawn } from "./figures/Pawn";
import { Queen } from "./figures/Queen";

export class Board {
  cells: Cell[][] = []


  public initCells() {
    for (let i = 0; i < 8; i += 1){
      const row: Cell[] = []
      for (let j = 0; j < 8; j += 1){
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)) // черные ячейки
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)) // белые ячейки
        }
      }
      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  public addFigurs() {
    new Queen(Colors.WHITE, this.getCell(3, 3))
    new Pawn(Colors.BLACK, this.getCell(5, 6))
    new Bishop(Colors.WHITE, this.getCell(2, 1))
  }
}
