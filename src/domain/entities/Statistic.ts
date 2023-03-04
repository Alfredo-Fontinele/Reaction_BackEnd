import { Entity } from "../../core/domain/Entity";
import { Comment, ICommentProps } from "./Comment";
import { INewProps, New } from "./New";

interface ILikeOrUnlike {
    news?: New[];
    comments?: Comment[];
}

interface IStatistic {
    userId: string;
    likes?: ILikeOrUnlike[];
    favorites?: New[];
    comments?: Comment[];
}

export class Statistic extends Entity<IStatistic> {
    private constructor(props: IStatistic, id?: string) {
        super(props, id);
    }
    static create(props: IStatistic, id?: string) {
        return new Statistic(
            {
                ...props,
                comments: props.comments ?? [],
                favorites: props.favorites ?? [],
                likes: props.likes ?? [],
            },
            id
        );
    }
}
