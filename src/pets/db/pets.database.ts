import { Pet } from  '../pet.interface';

export const pets: Array<Pet> = [
  {
    id: 1,
    name: "Abigail",
    species: "Feline",
    birthdate: new Date(2016, 6, 15).toISOString(),
    isDeleted: false,
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Jacó",
    species: "Feline",
    birthdate: new Date(2018, 10, 15).toISOString(),
    isDeleted: false,
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString(),
  }
]
