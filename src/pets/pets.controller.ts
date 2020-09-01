import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';

import { ApiParam, ApiBody, ApiForbiddenResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Pet } from './pet.interface';

@Controller('pets')
export class PetsController {

    constructor(private petsService: PetsService) {}

    @Get()
    findAll() {
        const response = {
            hasNext: false,
            items: this.petsService.getPets(),
            po_sync_date: new Date()
        }
        
        return response;
    }

    @ApiParam({ name: 'date' })
    @Get('diff/:date')
    diffPets(@Param() params) {
        const syncDate = params.date;
        
        const response = {
            hasNext: false,
            items: this.petsService.diffPets(syncDate),
            po_sync_date: new Date()
        }
        return response;
    }

    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    @ApiBody({ description: 'New pet' })
    @Post()
    createPet(@Body() body: Pet) {
        return this.petsService.createPet(body);
    }

    @ApiParam({ name: 'id' })
    @ApiBody({ description: 'Updated pet' })
    @Put(':id')
    updatePet(@Param() params, @Body() body) {
        return this.petsService.updatePet(params.id, body);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    removePet(@Param() params){
        return this.petsService.removePet(params.id);
    }
}
