import { AUTH_MODEL } from '../../app/auth/auth.entity';
import { NextFunction, Request, Response } from 'express';
import SecurityUtils from '../security/utils/security.utils';
import { AppException } from '../helper/app-excemption';
import { ClientResponse } from '../response/client.response';


export class BaseUserOps {
    static registerControlller(req: Request, res: Response, next: NextFunction): void {
        let body = req.body;

        const register = new AUTH_MODEL({
            user_name: body.user_name,
            user_email: body.user_email,
            user_mobile_number: body.user_mobile_number,
            user_role: body.user_role,
            user_dob: body.user_dob,
            user_gender: body.user_gender,
            user_address: body.user_address,
            user_password: SecurityUtils.getEncryptedPassword(body.user_password)
        });

        const valErr = register.validateSync();

        if (valErr) {
            next(new AppException(500, valErr));
        } else {
            AUTH_MODEL.findOne({ user_email: body.user_email }, (err, resp) => {
                if (err) {
                    next(new AppException(500, ClientResponse.createFailure(err)));
                } else if (resp) {
                    next(new AppException(401, ClientResponse.createFailure("User Already Exist")));
                } else {
                    register.save((saveErr) => {
                        if (saveErr) {
                            next(new AppException(500, ClientResponse.createFailure(saveErr)));
                        } else {
                            res.send(ClientResponse.createSucess("Successfull Registered"));
                        }
                    });
                }
            });
        }
    }
}