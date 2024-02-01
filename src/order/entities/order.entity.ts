import { Asset } from 'src/assets/entities/asset.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Asset, (asset) => asset.orders)
  asset: Asset;

  @Column()
  price: number;

  @Column()
  status: string;
}
