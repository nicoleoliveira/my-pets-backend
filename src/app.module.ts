import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';

@Module({
  imports: [],
  controllers: [AppController, PetsController],
  providers: [PetsService],
})
export class AppModule {}
