import { SchemaSync } from "src/interfaces/schema-sync.interface";

export interface Medicines extends SchemaSync {
    petId: number;
    name: string;
    dosage: string
    date: string;
    description: string;
    next: string;
}
