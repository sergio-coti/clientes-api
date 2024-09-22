import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'clientes',
})
export class ClientesModel {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nome', length: 150, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 50, nullable: false })
  email: string;
}
