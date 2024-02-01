import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Asset)
    private readonly assetsRepository: Repository<Asset>,
  ) {}

  findAll(): Promise<Asset[]> {
    return this.assetsRepository.find();
  }

  create(asset: Asset): Promise<Asset> {
    return this.assetsRepository.save(asset);
  }
}
