import { INewRepository } from "../../application/repositories/NewRepository";
import { New } from "../../domain/entities/New";

export class InMemoryNewRepository implements INewRepository {
    news: New[] = [];
    async findById(id: string): Promise<New | null> {
        const newFound = await this.news.find((news) => news.id === id);
        if (!newFound) {
            throw new Error("New Not Found!");
        }
        return newFound;
    }
}
