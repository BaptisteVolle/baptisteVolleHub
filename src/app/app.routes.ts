import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { GameoflifeComponent } from './gameoflife/gameoflife.component';
import { NonogramComponent } from './nonogram/nonogram.component';


export const routes: Routes = [
    {
      path: '',
      component: ProjectsComponent,
      title: 'Home page'
    },

    {
      path: 'worldmap',
      component: WorldMapComponent,
      title: 'World Map'
    },

    {
      path: 'gameoflife',
      component: GameoflifeComponent,
      title: 'Game of life'
    },

    {
      path: 'nonogram',
      component: NonogramComponent,
      title: 'Nonogram'
    },
];
