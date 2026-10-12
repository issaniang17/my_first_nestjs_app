import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LivresModule } from './livres/livres.module.js';

@Module({
  imports: [LivresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
