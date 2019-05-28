import { NextFunction, Request, Response } from 'express';
import { AUTH_MODEL } from './auth.entity';
import { AppException } from '../../common/helper/app-excemption';

export class AuthController {
    static loginController(req: Request, res: Response, cb: NextFunction): void {
        let body = req.body;

        let model = new AUTH_MODEL({
            user_name: body.userName,
            user_email: body.userEmail,
            user_password: body.password,
            user_mobile_number: body.userContactNo,
            user_role: body.role
        })

        const err = model.validateSync();

        if(err) {
            console.log(err);
        } else {
            model.save().then((st) => res.send("Saved").status(200)).catch((err) => res.send(err))
        }
    }

    static registerControlller(req: Request, res: Response, next: NextFunction): void {
        let body = req.body;

        const register = new AUTH_MODEL({
            user_name: body.userName,
            user_email: body.userEmail,
            user_password: body.password,
            user_mobile_number: body.userContactNo,
            user_role: body.role
            // user_password: SecurityUtils.getEncryptedPassword(signupDTO.getPassword)
        });

        const valErr = register.validateSync();

        console.log(valErr);


        if(valErr){
            console.log(valErr);
            next(new AppException(500, valErr));
        } else {
            AUTH_MODEL.findOne({ user_email : body.userEmail }, (err, resp) => {
                if (err) {
                    console.log(err);
                    next(new AppException(500, JSON.stringify(err)));
                } else if (resp) {
                    next(new AppException(401, "User Already Exist"));
                } else {
                    register.save((saveErr) => {
                        if (saveErr) {
                            next(new AppException(500, JSON.stringify(saveErr)));
                        } else {
                            res.sendStatus(200);
                        }
                    });
                }
            });
        }
    }
}