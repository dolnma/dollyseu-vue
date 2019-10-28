import {NextFunction, Request, Response} from "express";

export class DefaultController {

    async index (req: Request, res: Response, next: NextFunction) {
        res.send("it works! somehow..");
    }
}
