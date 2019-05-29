import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import path  from 'path';
import { runInNewContext } from 'vm';

/**
 * Application routes will be initiated only once it should be singleton by behaviour.
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
        this.expressApp.use(cors())
        this.expressApp.use(express.static('dist/appiness'))
        this.expressApp.use('**', (req, res, next) => {
            if(req.originalUrl.includes('api')){
                next()
            } else {
                res.sendFile('index.html', { root: path.join('dist/appiness') });
            }
        })
    }
    static getApp(): express.Express {
        if(!this.app){
            this.app = new ExpressApp();
        }
        return this.app.expressApp;
    }
}

export const APP : express.Express = ExpressApp.getApp();
