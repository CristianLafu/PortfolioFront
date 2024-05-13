import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './pages/main/main.component';
import { MisTrabajosComponent } from './pages/mis-trabajos/mis-trabajos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavBarComponent,
    MainComponent,
    MisTrabajosComponent,
    ContactoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
