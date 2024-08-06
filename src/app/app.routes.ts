import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { TabelaComponent } from './components/tabela/tabela.component';

export const routes: Routes = [
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'tabela',
        component: TabelaComponent
    },
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
    }
];
