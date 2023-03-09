import { Request, Response } from "express";

export class ExpressAdapter {
    static create(fn: Function) {
        return async function (req: Request, res: Response) {
            const obj = await fn(req.params, req.body);
            return res.json(obj);
        };
    }
    static getById(fn: Function) {
        return async function (req: Request, res: Response) {
            const obj = await fn(req.params);
            return res.json(obj);
        };
    }
}
