import * as express from 'express';
import { AuthRoutes } from '../app/auth/auth.route';

export class IndexRoute {
    private static indexRoute: express.Router = express.Router();

    private constructor() {

    }
    static mergerRoutes(): express.Router {
        this.indexRoute.use('/auth', AuthRoutes.mergeRoutes());
        this.indexRoute.use('**', (req:express.Request, res:express.Response, cb) => {
            res.sendStatus(404);
        });
        return this.indexRoute;
    }
}