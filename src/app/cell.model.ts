import { brushY } from "d3";

export class Cell {
    alive: boolean;
    x: number;
    y ; number;
    shallBeAlive: boolean;
  
    constructor(alive: boolean, x: number, y: number) {
      this.alive = alive;
      this.x = x;
      this.y = y;
    }
  
    toggleState(): void {
      this.alive = !this.alive;
    }
  }