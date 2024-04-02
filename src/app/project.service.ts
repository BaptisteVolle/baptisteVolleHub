import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: Project[] = [
    {
      id : 0,
      name : 'Game of Life ',
      description : 'The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.',
      url : 'gameoflife',
    },

    {
      id : 1,
      name : 'Interactive World Map',
      description : 'A pretty interactive world map',
      url: 'worldmap',
    },
  ]
  
  getAllProjects(): Project[] {
    return this.projectList;
  }

  constructor() { }

}
