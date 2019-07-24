import { NextFunction, Request, Response } from 'express';
import { AUTH_MODEL } from '../auth/auth.entity';
import { AppException } from '../../common/helper/app-excemption';
import { ClientResponse } from '../../common/response/client.response';
import { BaseUserOps } from '../../common/classes/users.base';
import { TokenVerification } from '../../common/security/authorization/verifyToken';
import { LOGGER } from '../../config/winston.config';

export class UserController extends BaseUserOps {

    static current_user: any;

    static getAllUsers(req: Request, res: Response, next: NextFunction): void {
        AUTH_MODEL.find({}, (userError, userData) => {
            if (userError || !userData) {
                next(new AppException(401, ClientResponse.createFailure('User Not Found')));
            } else {
                res.status(200).send(ClientResponse.createSucess(userData));
            }
        });
    }

    static getUserById(req: Request, res: Response, next: NextFunction): void {
        let UserId = req.params.userId;
        if (UserId) {
            AUTH_MODEL.findById(req.params.userId, (userError, userData) => {
                if (userError || !userData) {
                    next(new AppException(401, ClientResponse.createFailure('User Not Found')));
                } else {
                    res.status(200).send(ClientResponse.createSucess(userData));
                }
            });
        }
    }

    static updateUserByUserId(req: Request, res: Response, next: NextFunction): void {
        let body = req.body;
        AUTH_MODEL.updateOne({ _id: body._id }, body, (userError, userData) => {
            if (userError || !userData) {
                next(new AppException(401, ClientResponse.createFailure('User Not Found')));
            } else {
                res.status(200).send(ClientResponse.createSucess(userData));
            }
        });
    }

    static deleteUserById(req: Request, res: Response, next: NextFunction): void {
        AUTH_MODEL.deleteOne({ _id: req.params.userId }, (userError) => {
            if (userError) {
                next(new AppException(401, ClientResponse.createFailure('User Not Found')));
            } else {
                res.status(200).send(ClientResponse.createSucess("Deleted Success Fully"));
            }
        });
    }

    static addUserByAdmin(req: Request, res: Response, next: NextFunction) {
        let tockenVar = new TokenVerification();
        tockenVar.getCurrentUser(req).then(user => {
            if (user.data.userData.user_role.code == 'ADMIN') {
                UserController.registerControlller(req, res, next);
            } else {
                next(new AppException(401, ClientResponse.createFailure('Not Authorized to add users')));
            }
        }).catch((err) => {
            LOGGER.info(err)
            next(new AppException(401, ClientResponse.createFailure('Not Authorized to add users')));
        })
    }
    
}