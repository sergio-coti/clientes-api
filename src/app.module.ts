import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database-coti.c3068wc46xnx.us-east-1.rds.amazonaws.com',
      port: 5432,
      username: 'postgres',
      password: 'Coti2024!',
      database: 'bdclientes',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      ssl: { rejectUnauthorized: false }
    }),
    ClientesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
