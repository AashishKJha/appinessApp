import { NextFunction, Request, Response } from 'express';
import { AUTH_MODEL } from './auth.entity'; 
import { AppException } from '../../common/helper/app-excemption';
import { ClientResponse } from '../../common/response/client.response';
import SecurityUtils from '../../common/security/utils/security.utils';
import { TokenService } from "../../common/security/authentication/tokenGenerator";
import { ENV } from '../../config/env.config';
import { BaseUserOps } from '../../common/classes/users.base';

export class AuthController extends BaseUserOps {
    static loginController(req: Request, res: Response, next: NextFunction): void {
        let body = req.body;
        let model = new AUTH_MODEL({
            user_email: body.user_email,
            user_password: body.user_password
        });

        const err = model.validateSync();

        if (body.user_email && body.user_password) {
            AUTH_MODEL.findOne({ user_email: body.user_email }, (err, authResp: any) => {
                if (err) {
                    next(new AppException(401, ClientResponse.createFailure('User Not Found')));
                } else if (authResp) {
                    const isAuth = new SecurityUtils(body.user_password).validatePassword(authResp.user_password);
                    isAuth.then((bool) => {
                        if (bool) {
                            res.status(200).send(ClientResponse.createSucess({
                                token: new TokenService(true, authResp).getAccessToken(),
                                username: body.user_email,
                                user_role: authResp.user_role.code,
                                exp_time: parseInt(ENV.getVars('EXT')),
                                user_id: authResp._id
                            }));
                        } else {
                            next(new AppException(401, ClientResponse.createFailure("Incorect Password")));
                        }
                    });
                } else {
                    next(new AppException(401, ClientResponse.createFailure('User Not Found')));
                }
            });
        }
    }
}