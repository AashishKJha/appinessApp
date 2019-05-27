import { LOGGER } from '../../config/winston.config';

export class AppException extends Error {
    protected status : number;
    protected data : any;
    constructor(code, data) {
        super();
        LOGGER.info(data);
        Error.captureStackTrace(this, this.constructor);
        this.status = code;
        this.data = data;
    }
}
