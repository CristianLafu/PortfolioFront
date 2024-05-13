import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { MisTrabajosComponent } from './pages/mis-trabajos/mis-trabajos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [

    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: MainComponent },
    { path: 'aboutWorks', component: MisTrabajosComponent },
    { path: 'contact', component: ContactoComponent },

];
