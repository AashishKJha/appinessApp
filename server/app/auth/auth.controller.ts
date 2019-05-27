import { NextFunction, Request, Response } from 'express';
export class AuthController {
    static loginController(req: Request, res: Response , cb : NextFunction) : void{
        if(req.query.name){
            res.send(JSON.stringify({
                message: "Name is : " + req.query.name,
                success : true
            }))
        } else {
            cb("Name Not Found");
        }
    }
}