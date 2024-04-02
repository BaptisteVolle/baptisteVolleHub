import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProjectsComponent,
    RouterModule,
    MatToolbarModule,
  ],
  template: `
  <main>
    <mat-toolbar class="main-toolbar">
    <a [routerLink]="['/']">
      <header>
      <span>Baptiste Volle Website</span>
      </header>
    </a>
      
    </mat-toolbar>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'baptisteVolleHub';
}
