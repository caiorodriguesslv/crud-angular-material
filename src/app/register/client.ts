import { v4 as uuid} from 'uuid'

export class Client {
    id?: string;
    nome?: string;
    cpf?: string;
    dataNascimento?: string;
    email?: string;

    static newClient() {
        const client= new Client();
        client.id = uuid();
        return client;
    }
}

