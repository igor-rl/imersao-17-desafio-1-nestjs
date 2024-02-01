import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Asset } from './entities/asset.entity';

@Controller('api/assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll(): Promise<Asset[]> {
    return this.assetsService.findAll();
  }

  @Post()
  create(@Body() asset: Asset): Promise<Asset> {
    return this.assetsService.create(asset);
  }
}
