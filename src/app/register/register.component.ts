import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MATERIAL_IMPORTS } from '../material.imports'; 
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-register',
  imports: [FlexLayoutModule, MATERIAL_IMPORTS, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
