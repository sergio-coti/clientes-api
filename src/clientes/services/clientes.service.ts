import { Injectable } from '@nestjs/common';
import { ClientesModel } from '../models/clientes.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {

  constructor(
    @InjectRepository(ClientesModel)
    private clientesRepository: Repository<ClientesModel>,
  ) {}

  async add(cliente: ClientesModel): Promise<ClientesModel> {
    const result = await this.clientesRepository.save(cliente);
    return result;
  }

  async findAll(): Promise<ClientesModel[]> {
    return await this.clientesRepository.find();
  }
}
