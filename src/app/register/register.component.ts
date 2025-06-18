import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MATERIAL_IMPORTS } from '../material.imports'; 
import { FormsModule } from '@angular/forms'
import { Client } from './client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register',
  imports: [FlexLayoutModule, MATERIAL_IMPORTS, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  client: Client = Client.newClient();

  constructor(private Service: ClientService) {
    
  }

  save(){
    this.Service.save(this.client);
  }
}
