import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MATERIAL_IMPORTS } from '../material.imports'; 
import { FormsModule } from '@angular/forms'
import { Client } from './client';

@Component({
  selector: 'app-register',
  imports: [FlexLayoutModule, MATERIAL_IMPORTS, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  client: Client = Client.newClient();

  save(){
    console.log("Dados Cliente:", this.client);
  }
}
