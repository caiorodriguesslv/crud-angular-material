import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MATERIAL_IMPORTS } from './material.imports'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    MATERIAL_IMPORTS 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-angular-material';
}
