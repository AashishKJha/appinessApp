import * as express from 'express';
import { AuthRoutes } from '../app/auth/auth.route';
import { TokenVerification } from '../common/security/authorization/verifyToken';
import { UserRoutes } from '../app/user/user.route';
import { LOGGER } from '../config/winston.config';

export class IndexRoute {
    private static indexRoute: express.Router = express.Router();

    private constructor() {}
    
    static mergerRoutes(): express.Router {
        this.indexRoute.use('/auth', AuthRoutes.mergeRoutes());
        this.indexRoute.use('/user', TokenVerification.isAuthorized, UserRoutes.mergeRoutes())
        
        // Error Handling middle-ware
        this.indexRoute.use((err, req, res, next) => {
            LOGGER.info(err)
            res.status(err.status).send(err.data);
        });

        
        this.indexRoute.use('**', (req:express.Request, res:express.Response, cb) => {
            res.sendStatus(404);
        });
        return this.indexRoute;
    }
}