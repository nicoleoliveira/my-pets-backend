import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { MedicinesController } from './medicines/medicines.controller';
import { MedicinesService } from './medicines/medicines.service';

@Module({
  imports: [],
  controllers: [AppController, PetsController, MedicinesController],
  providers: [PetsService, MedicinesService],
})
export class AppModule {}
