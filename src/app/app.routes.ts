import { Routes } from '@angular/router';
import { CursosLayout } from './shared/layouts/CursosLayout/CursosLayout';
import { CursosPage } from './pages/cursos-page/cursos-page';

export const routes: Routes = [
   { path: '',
    component: CursosLayout,
    children: [
      {
        path: 'cursos',
        component: CursosPage,
      },
    ]},
    {
      path:'**',
      redirectTo:'cursos'

    }
];
