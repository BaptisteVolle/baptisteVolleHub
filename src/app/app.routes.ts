import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { WorldMapComponent } from './world-map/world-map.component';


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
];
