import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ApiParam, ApiCreatedResponse, ApiForbiddenResponse, ApiBody } from '@nestjs/swagger';
import { MedicinesService } from './medicines.service';
import { Medicines } from './medicines';

@Controller('medicines')
export class MedicinesController {

    constructor(private medicinesService: MedicinesService) {}

    @Get()
    findAll() {
        const response = {
            hasNext: false,
            items: this.medicinesService.getMedicines(),
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
            items: this.medicinesService.diffMedicines(syncDate),
            po_sync_date: new Date()
        }
        return response;
    }

    @ApiCreatedResponse({ description: 'The record has been successfully created.'})
    @ApiForbiddenResponse({ description: 'Forbidden.'})
    @ApiBody({ description: 'New pet' })
    @Post()
    createPet(@Body() body: Medicines) {
        return this.medicinesService.createMedicine(body);
    }

    @ApiParam({ name: 'id' })
    @ApiBody({ description: 'Updated pet' })
    @Put(':id')
    updatePet(@Param() params, @Body() body) {
        return this.medicinesService.updateMedicine(params.id, body);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    removePet(@Param() params){
        return this.medicinesService.removeMedicine(params.id);
    }

}
