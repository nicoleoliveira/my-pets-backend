import { Medicines } from "src/medicines/medicines";

export const medicines: Array<Medicines> = [
    {
        petId: 1,
        name: 'Vermifugo',
        dosage: '1 comprimido a cada 8 horas',
        date: new Date(2016, 6, 15).toISOString(),
        description: 'Combate de parasitas',
        next: new Date(2020, 11, 15).toISOString()
    }
];