import { Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { FormularioComponent } from './components/formulario/formulario.component';

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
        path: 'formulario',
        component: FormularioComponent
    },
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    }
];
