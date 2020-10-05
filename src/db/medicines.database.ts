import { Medicines } from "src/medicines/medicines";

export const medicines: Array<Medicines> = [
    {
        id: 1,
        petId: 1,
        name: 'Vermifuge',
        dosage: 'a medicine for each eight hours',
        date: new Date(2016, 6, 15).toISOString(),
        description: `A medicine that is used to destroy worms that live as parasites in the bodies of
        other living creatures`,
        next: new Date(2020, 11, 15).toISOString()
    },
    {
        id: 2,
        petId: 2,
        name: 'Vaccine',
        dosage: 'a medicine for each eight hours',
        date: new Date(2016, 6, 15).toISOString(),
        description: `A substance containing a virus or bacterium in a form that is not harmful, given to a person or animal to prevent them
        from getting the disease that the virus or bacterium causes`,
        next: new Date(2020, 11, 15).toISOString()
    }
];