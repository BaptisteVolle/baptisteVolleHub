import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cell } from '../../cell.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})

export class GridComponent {

  rows: number = 20;
  cols: number = 10;
  grid: Cell[][] = [];

  cells: boolean[][];

  constructor() {}

  ngOnInit(): void {
    this.initGrid(); // We create the Grid
  }

  initGrid(): void {
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = new Cell(false,i,j);
      }
    }
  }

  toggleCellState(cell: Cell): void {
    cell.toggleState();
  }


  getCurrentState() {
    return this.grid;
  }

  getNeighborsAlive(cell : Cell, currentGrid:Cell[][]) {
    let nbNeighborsAlive = 0;

    for (let dRow = -1; dRow <= 1; dRow++) {
      for (let dCol = -1; dCol <= 1; dCol++) {
        if (dRow === 0 && dCol === 0) continue; // Ignore the cell itself
  
        let neighborRow = cell.x + dRow;
        let neighborCol = cell.y + dCol;

        // Apply toroidal wrapping for neighbors on the edges of the grid
        if (neighborRow < 0 || 
          neighborRow >= this.rows || 
          neighborCol < 0 || 
          neighborCol >= this.cols) {
          }
        else {
          let currentNeighbor = currentGrid[neighborRow][neighborCol];
          if (currentNeighbor.alive) { nbNeighborsAlive ++}
        }
      }
    }
  
    return nbNeighborsAlive;

  }

  updateGrid(grid) {
    this.grid = grid;
  }

}
