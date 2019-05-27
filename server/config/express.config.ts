import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

/**
 * Application routes will be initiated only onceso it should be singleton by behaviour.
 */
class ExpressApp {
    private static app : ExpressApp;
    private expressApp : express.Express;

    private constructor(){
        this.expressApp = express(); 
        this.mergeMiddlWare();
    }

    private mergeMiddlWare(){
        this.expressApp.use(bodyParser());
        this.expressApp.use(bodyParser.urlencoded({ extended: true }));
        this.expressApp.use(cookieParser());
        this.expressApp.use(morgan('dev'));
    }

    static getApp(): express.Express {
        if(!this.app){
            this.app = new ExpressApp();
        }
        return this.app.expressApp;
    }
}

export const APP : express.Express = ExpressApp.getApp();
