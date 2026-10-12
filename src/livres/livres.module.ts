import { Module } from '@nestjs/common';
import { LivresController } from './livres.controller.js';
import { LivresService } from './livres.service.js';

@Module({
  controllers: [LivresController],
  providers: [LivresService]
})
export class LivresModule {}
