import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import new components here after running ng generate component COMP_NAME
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'home-app';
}
