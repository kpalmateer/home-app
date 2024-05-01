import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import new components here after running ng generate component COMP_NAME
import { ResumeComponent } from './resume/resume.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResumeComponent, NavBarComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home-app';
}
