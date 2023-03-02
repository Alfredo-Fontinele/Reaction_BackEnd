export interface ICreatedDate {
    created_at?: Date;
}

export interface IUpdatedDate {
    updated_at?: Date;
}

export interface IDate extends ICreatedDate, IUpdatedDate {}
