import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { ClientesModel } from '../models/clientes.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Clientes')
@Controller('clientes')
export class ClientesController {
    
  constructor(private clientesService: ClientesService) {}

  @ApiOperation({
    summary: 'Serviço para cadastro de cliente',
    description: 'Criar um novo cliente na base de dados.',
  })
  @Post()
  post(@Body() model: ClientesModel): Promise<ClientesModel> {
    return this.clientesService.add(model);
  }

  @ApiOperation({
    summary: 'Serviço para consulta de clientes',
    description: 'Consultar os clientes cadastrados na base de dados.',
  })
  @Get()
  getAll(): Promise<ClientesModel[]> {
    return this.clientesService.findAll();
  }
}
