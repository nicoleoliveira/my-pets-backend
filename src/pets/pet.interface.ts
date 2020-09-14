import { SchemaSync } from "src/interfaces/schema-sync.interface";

export interface Pet extends SchemaSync {
    name: string,
    species: string,
    birthdate: string,
    description?: string
}
