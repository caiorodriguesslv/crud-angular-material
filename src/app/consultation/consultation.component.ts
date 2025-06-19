import { Component, OnInit, OnDestroy } from '@angular/core';
import { MATERIAL_IMPORTS } from '../material.imports'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../client.service';
import { Client } from '../register/client';


@Component({
  selector: 'app-consultation',
  imports: [FlexLayoutModule, MATERIAL_IMPORTS, FormsModule],
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss'
})
export class ConsultationComponent implements OnInit {

  listClients: Client[] = [];
  columnsTable: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'email'];

  constructor(private service: ClientService) {

  }


  ngOnInit() {
    this.listClients = this.service.searchClient('');
  }

  


}
