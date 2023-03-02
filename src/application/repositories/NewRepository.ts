import { New } from "../../domain/entities/New";

export interface INewRepository {
    findById(id: string): Promise<New | null>;
}
