import { Statistic } from "../../domain/entities/Statistic";

export interface IStatisticRepository {
    findUserStatisticById(id: string): Promise<Statistic | null>;
}
