import * as express from "express";
import { AuthController } from './auth.controller';

export class AuthRoutes {

    static authRoutes: express.Router = express.Router();

    private constructor() { }

    static mergeRoutes(): express.Router {
        this.authRoutes.get('/login', AuthController.loginController)
        return this.authRoutes
    }
    
}