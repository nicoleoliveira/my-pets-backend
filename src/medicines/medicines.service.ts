import { Injectable } from '@nestjs/common';

import { Medicines } from './medicines';
import { medicines } from 'src/db/medicines.database';
import { pets } from 'src/db/pets.database';

@Injectable()
export class MedicinesService {
    medicines = medicines;

    getMedicines() {
        return this.medicines.map(medicine => {
            const pet = pets.find(pet => pet.id === medicine.petId);
            delete medicine.petId;
            return { ...medicine, pet: { id: pet.id, name: pet.name } }
        });
    }

    getMedicine(id: number) {
        return this.medicines.find(medicine => medicine.id === id);
    }

    diffMedicines(syncDate: string) {
        return this.medicines.filter(pet => new Date(pet.updatedDate) >= new Date(syncDate));
    }

    createMedicine(newMedicine: Medicines) {
        newMedicine.createdDate = new Date().toISOString();
        newMedicine.updatedDate = new Date().toISOString();
        newMedicine.id = this.medicines.length + 1;
        this.medicines.push(newMedicine);

        return this.medicines;
    }

    updateMedicine(id: string, updatedMedicine: Medicines) {
        updatedMedicine.updatedDate = new Date().toISOString();

        this.medicines = this.medicines.map(pet => { 
            return pet.id.toString() === id ? updatedMedicine : pet
        });

        return this.medicines;
    }

    removeMedicine(id: string) {
        this.medicines = this.medicines.map(medicine => {
            
            if(medicine.id.toString() === id) {
                medicine.removedDate = new Date().toISOString();
                medicine.isDeleted = true;
            }
            return medicine;
        });

        return this.medicines;
    }
}
