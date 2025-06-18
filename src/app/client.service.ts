import { Injectable } from '@angular/core';
import { Client } from './register/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  static REPO_CLIENTS = "_CLIENTS";

  constructor() { }

  save(client: Client) {
    const storage = this.getStorage();
    storage.push(client);
    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(storage));
  }


  getStorage() : Client[] {
    const repositoryClients = localStorage.getItem(ClientService.REPO_CLIENTS);

    if(repositoryClients) {
      const clients : Client[] = JSON.parse(repositoryClients);
      return clients;
    }

    const clients : Client[] = [];
    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(clients));
    return clients;


  }
}
