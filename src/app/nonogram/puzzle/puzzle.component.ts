import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { nonoGramCell } from '../../nonogramCell.model';
import { FormsModule } from '@angular/forms'



@Component({
  selector: 'app-puzzle',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent {


  constructor() {}
  grid: nonoGramCell[][] = [];
  rowClues: Array<{data: number, list: number[]}> = [];
  colClues: Array<{data: number, list: number[]
}> = [];
  currentFill: 'cross' | 'filled' = 'filled'
  nbLife: Array<boolean> = [true, true, true];
  isResolved: boolean = false;
  timerStart: Date;
  timerEnd: string;

  ngOnInit() {
    this.generateRandomGrid(10);
  }

  generateRandomGrid(size:number) {
    let newRandomGrid: nonoGramCell[][] = [];
    for ( let i = 0 ; i < size; i++) {
      newRandomGrid[i] = [];
      for ( let j = 0 ; j < size; j++) {

        let shallBeFilled = !(Math.floor(Math.random() * 4) + 1 == 1);
        if (shallBeFilled) {
          newRandomGrid[i][j] = new nonoGramCell('empty',i,j, shallBeFilled, true);
        }
        else {
          let isCrossRevealed = (Math.floor(Math.random() * 5) + 1 == 1);
          if (isCrossRevealed) {
            newRandomGrid[i][j] = new nonoGramCell('cross',i,j, shallBeFilled,false);
          }
          else {
            newRandomGrid[i][j] = new nonoGramCell('empty',i,j, shallBeFilled,true);
          }
        }
      }
    }
    this.nbLife = [true, true, true];
    this.updateGrid(newRandomGrid);
    this.updateClues(newRandomGrid);
    this.timerStart = new Date();
    this.timerEnd = '';
    this.isResolved = false;

  }

  checkGrid(cellClicked?: nonoGramCell) {
    let rowIsValid = true;
    let colIsValid = true;
    let resolve = true;
    for ( let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) { 
        let cell = this.grid[i][j];
        if (cell.shallBeFilled && cell.status != 'filled') {
          resolve = false;
          if (cellClicked?.x == cell.x) {
            rowIsValid = false;
          }
          if (cellClicked?.y == cell.y) {
            colIsValid = false;
          }
        }  
      }
    }

    if (rowIsValid) {
      this.fillCross('row', cellClicked?.x);
    }

    if (colIsValid) {
      this.fillCross('col',cellClicked?.y);
    }

    this.isResolved = resolve;
    let ms =  new Date().getTime() - this.timerStart.getTime();
    this.timerEnd = new Date(ms).toLocaleTimeString().substring(3)
    return true;
  }

  fillCross(type:string, index:number) {

    if (type == 'row') {
      for ( let i = 0; i < this.grid[index].length; i++) {
        if ( !this.grid[index][i].shallBeFilled ) {
          this.grid[index][i].status = 'cross';
          this.grid[index][i].canBeEdited = false;
        }
      } 
      document.querySelectorAll('.hint.left.row-data-'+index).forEach((el: HTMLElement) => {
        // Toggle the class "active" to "inactive" and vice versa
        el.style.opacity = "0.4";
      });
    }
    else {
      for ( let i = 0; i < this.grid.length; i++) {
        if (!this.grid[i][index].shallBeFilled ) {
          this.grid[i][index].status = 'cross';
          this.grid[i][index].canBeEdited = false;
        }
      } 
      
      document.querySelectorAll('.hint.top.col-data-'+index).forEach((el: HTMLElement) => {
        // Toggle the class "active" to "inactive" and vice versa
        el.style.opacity = "0.4";
      });
    }
  }
    
  updateClues(grid: nonoGramCell[][]) {
    this.rowClues = [];
    this.colClues = [];
  
    // Calculate row clues
    grid.forEach((row ,i)=> {
      let clue = 0;
      const rowClue: number[] = [];
      row.forEach(cell => {
        if (cell.shallBeFilled) {
          clue++;
        } else if (clue > 0) {
          rowClue.push(clue);
          clue = 0;
        }
      });
      if (clue > 0) {
        rowClue.push(clue);
      }
      this.rowClues.push({data:i , 'list' : rowClue});
    });
  
    // Calculate column clues
    const cols = grid[0].length;
    for (let j = 0; j < cols; j++) {
      let clue = 0;
      const columnClue: number[] = [];
      for (let i = 0; i < grid.length; i++) {
        const cell = grid[i][j];
        if (cell.shallBeFilled) {
          clue++;
        } else if (clue > 0) {
          columnClue.push(clue);
          clue = 0;
        }
      }
      if (clue > 0) {
        columnClue.push(clue);
      }
     
      this.colClues.push({data:j , 'list' : columnClue}); 
    }
  }

  changeFill(type: 'cross' | 'filled') {
    
    this.currentFill = type;
  }

  toggleCellState(cell: nonoGramCell): void {

    if (cell.canBeEdited) {
      if (this.currentFill == 'filled') {
        if (!cell.shallBeFilled) {
          let index = this.findLastTrueIndex(this.nbLife);
          this.nbLife[index] = false;
          cell.toggleState('cross');
          if (index == 0) {
            alert('LOSER ');
          }
        }
        else {
          cell.toggleState(this.currentFill);
          this.checkGrid(cell);
        }
      }
      else {
        cell.toggleState(this.currentFill);
      }
    }
  }


  findLastTrueIndex(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i]) {
        return i;
      }
    }
    return -1; // Return -1 if no true element is found
  }

  getCurrentState() {
    return this.grid;
  }

  updateGrid(grid) {
    this.grid = grid;
  }
}
