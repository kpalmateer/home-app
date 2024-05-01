import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {
        path: 'resume',
        component: ResumeComponent,
        title: 'Resume'
    }
];

export default routes;