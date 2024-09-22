import { Module } from '@nestjs/common';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/clientes.service';

@Module({
    controllers: [ClientesController],
    providers: [ClientesService]
})
export class ClientesModule {}
