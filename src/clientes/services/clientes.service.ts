import { Injectable } from '@nestjs/common';
import { ClientesModel } from '../models/clientes.model';

@Injectable()
export class ClientesService {
    
  clientes: ClientesModel[] = [];

  add(cliente: ClientesModel): ClientesModel {
    this.clientes.push(cliente);
    return cliente;
  }

  findAll(): ClientesModel[] {
    return this.clientes;
  }
}
