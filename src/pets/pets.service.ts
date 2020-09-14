import { Injectable } from '@nestjs/common';
import { pets } from './db/pets.database';
import { Pet } from './pet.interface';

@Injectable()
export class PetsService {

    pets = pets;

    getPets() {
        return this.pets;
    }

    getPet(id: number) {
        return this.pets.find(pet => pet.id === id);
    }

    diffPets(syncDate: string) {
        return this.pets.filter(pet => new Date(pet.updatedDate) >= new Date(syncDate));
    }

    createPet(newPet: Pet) {
        newPet.createdDate = new Date().toISOString();
        newPet.updatedDate = new Date().toISOString();
        newPet.id = this.pets.length + 1;
        this.pets.push(newPet);

        return this.pets;
    }

    updatePet(id: string, updatedPet: Pet) {
        updatedPet.updatedDate = new Date().toISOString();

        this.pets = this.pets.map(pet => { 
            return pet.id.toString() === id ? updatedPet : pet
        });

        return this.pets;
    }

    removePet(id: string) {
        this.pets = this.pets.map(pet => {
            
            if(pet.id.toString() === id) {
                pet.removedDate = new Date().toISOString();
                pet.isDeleted = true;
            }
            return pet;
        });

        return this.pets;
    }

}
