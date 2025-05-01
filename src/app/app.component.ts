import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './material.imports'; // importa os módulos centralizados

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MATERIAL_IMPORTS 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-angular-material';
}
