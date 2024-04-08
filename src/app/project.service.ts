import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Project[] = [
    {
      id : 'gameoflife',
      name : 'Game of Life ',
      description : 'The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.',
      url : 'gameoflife',
    },

    {
      id : 'worldmap',
      name : 'Interactive World Map',
      description : 'An interactive world map where you can display country by color based on differents data, and also display multiple information on country selection',
      url: 'worldmap',
    },
    {
      id : 'nonogram',
      name : 'A nonogram game',
      description : 'Nonograms are picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the edges of the grid to reveal a hidden picture',
      url: 'nonogram',
    },
  ]
  
  getAllProjects(): Project[] {
    return this.projectList;
  }

  constructor() { }

}
