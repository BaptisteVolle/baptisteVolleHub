import { Component, ViewChild, ViewChildren } from '@angular/core';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { Cell } from '../cell.model';

@Component({
  selector: 'app-nonogram',
  standalone: true,
  imports: [
    PuzzleComponent,
  ],
  templateUrl: './nonogram.component.html',
  styleUrl: './nonogram.component.css'
})
export class NonogramComponent {


   @ViewChild (PuzzleComponent) puzzleComponent!: PuzzleComponent; 

  constructor() {};


  generateRandomGrid(size:number) {
    this.puzzleComponent.generateRandomGrid(size);
  }
}
