import { Entity } from "../core/domain/Entity";

interface IConsoleResponse {
    text: string;
    response: Entity<any>;
}

export const consoleResponse = ({ text, response }: IConsoleResponse) => {
    console.group(`\n${text}`);
    console.dir(response, { depth: null });
    console.groupEnd();
};
