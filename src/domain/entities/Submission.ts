import { Entity } from "../../core/domain/Entity";

export interface ISubmissionProps {
    userId: string;
    newId: string;
}

export class Submission extends Entity<ISubmissionProps> {
    private constructor(props: ISubmissionProps, id?: string) {
        super(props, id);
    }
    static create(props: ISubmissionProps, id?: string) {
        return new Submission(props, id);
    }
}
