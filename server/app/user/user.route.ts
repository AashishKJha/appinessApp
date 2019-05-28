import * as express from "express";
import { UserController } from './user.controller';

export class UserRoutes {

    static userRoutes: express.Router = express.Router();

    private constructor() { }

    static mergeRoutes(): express.Router {
        this.userRoutes.get('/all', UserController.getAllUsers);
        this.userRoutes.get('/:userId', UserController.getUserById);
        this.userRoutes.post('/update', UserController.updateUserByUserId);
        this.userRoutes.delete('/:userId', UserController.deleteUserById)
        this.userRoutes.post('/add', UserController.addUserByAdmin)
        return this.userRoutes;
    }

}