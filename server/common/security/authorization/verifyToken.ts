import { TokenService } from '../authentication/tokenGenerator';
import { ClientResponse } from '../../response/client.response';
import { AppException } from '../../helper/app-excemption';
import { Request, Response, NextFunction } from 'express';

export class TokenVerification {

    static isAuthorized(req: Request, res : Response, next : NextFunction) {
        const tokenVar = new TokenVerification();
        const token = tokenVar.getToken(req);
        if (!token) {
            const errorResp = ClientResponse.createFailure("Unauthorized Access");
            next(new AppException(401, errorResp));
        } else {
            tokenVar.getCurrentUser(req).then((auth) => {
                if (auth.success) {
                    next();
                } else {
                    next(new AppException(401, ClientResponse.createFailure("Un Authorized Access")));
                }
            });
        }
    }

    getToken(req) {
        return req.headers.authorization;
    }

    getCurrentUser(req) {
        return TokenService.verifyToken(this.getToken(req));
    }
}

