import { Entity } from "../../core/domain/Entity";
import { ICommentProps } from "./Comment";
import { INewProps } from "./New";

interface ILikeOrUnlike {
    news: INewProps[];
    comments: ICommentProps[];
}

interface IStatistic {
    userId: string;
    likes?: ILikeOrUnlike[];
    favorites?: INewProps[];
    comments?: ICommentProps[];
}

export class Statistic extends Entity<IStatistic> {
    private constructor(props: IStatistic, id?: string) {
        super(props, id);
    }
    static create(props: IStatistic, id?: string) {
        return new Statistic(props, id);
    }
}
