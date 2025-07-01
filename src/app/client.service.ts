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

  searchClient(nameSearch: string) : Client[] { 
    const clients = this.getStorage();
    

    if (!nameSearch) {
      return clients;
    }

    return clients.filter(client => 
      client.nome?.toLowerCase().includes(nameSearch.toLowerCase())
    );
  }

  private getStorage(): Client[] {
    const repositoryClients = localStorage.getItem(ClientService.REPO_CLIENTS);

    if (repositoryClients) {
      const clients: Client[] = JSON.parse(repositoryClients);
      return clients;
    }

    const clients: Client[] = [];
    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(clients));
    return clients;
  }
}
