import { Module } from '@nestjs/common';
import { ClientesController } from './controllers/clientes.controller';
import { ClientesService } from './services/clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModel } from './models/clientes.model';

@Module({
    imports: [TypeOrmModule.forFeature([ClientesModel])],
    controllers: [ClientesController],
    providers: [ClientesService]
})
export class ClientesModule {}
