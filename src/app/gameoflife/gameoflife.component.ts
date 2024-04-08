import { Component, ViewChild } from '@angular/core';
import { GridComponent } from './grid/grid.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { Cell } from '../cell.model';

@Component({
  selector: 'app-gameoflife',
  standalone: true,
  imports: [
    GridComponent,
    ButtonsComponent
  ],
  templateUrl: './gameoflife.component.html',
  styleUrl: './gameoflife.component.css'
})
export class GameoflifeComponent {

  isRunning = false;
  gameInterval;
  timeInterval = 200;
  @ViewChild(GridComponent) gridComponent!: GridComponent; 

  toggleGameStatus() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.gameInterval = setInterval(() => {
      const currentState = this.gridComponent.getCurrentState();
      this.goNextStep(currentState);
      }, this.timeInterval);
    }
    else {
      this.isRunning = false;
      clearInterval(this.gameInterval);
    }
  }
  
  generateRandomGrid() {
    let newRandomGrid: Cell[][] = [];
    const currentState = this.gridComponent.getCurrentState();
    for ( let i = 0 ; i < currentState.length; i++) {
      newRandomGrid[i] = [];
      for ( let j = 0 ; j < currentState[i].length; j++) {
        let isAlive = (Math.floor(Math.random() * 2) + 1 == 1);
        newRandomGrid[i][j] = new Cell(isAlive,i,j);
      }
    }

    this.gridComponent.updateGrid(newRandomGrid);
  }

  goNextStep(currentState) {

    let newGrid: Cell[][] = [];

    for ( let i = 0 ; i < currentState.length; i++) {
      newGrid[i] = [];
      for ( let j = 0 ; j < currentState[i].length; j++) {
        let currentCell = currentState[i][j];
        let nbNeighboursAlive = this.gridComponent.getNeighborsAlive(currentCell, currentState);

        if (currentCell.alive) {
          if (nbNeighboursAlive < 2 || nbNeighboursAlive > 3) {
            newGrid[i][j] = new Cell(false,i,j);
          } 
          else {
            newGrid[i][j] = new Cell(true,i,j);
          }
        }
        else {
          if (nbNeighboursAlive == 3) {
            newGrid[i][j] = new Cell(true,i,j);
          } 
          else {
            newGrid[i][j] = new Cell(false,i,j);
          }
        }
      } 
    } 

    this.gridComponent.updateGrid(newGrid);

  }
}
