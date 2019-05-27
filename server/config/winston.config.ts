import { createLogger, Logger, transports, format } from 'winston';
import { ENV } from './env.config';

class WinstonLogger {

    public logger: Logger;

    private static _instance: WinstonLogger;

    private constructor() {
        this.logger = this.createLogger();
    }

    public static getLogger(): Logger {
        if (!this._instance) {
            this._instance = new WinstonLogger();
        }
        return this._instance.logger;
    }

    private createLogger(): Logger {
        return createLogger({
            format: format.combine(
                format.timestamp({
                    format: ENV.getVars('LOG_DATE_FORMAT')
                }),
                format.errors({ stack: true }),
                format.splat(),
                format.json()
            ),
            transports: [
                //console logging using winston
                new transports.Console({
                    format: format.combine(
                        format.colorize(),
                        format.simple()
                    )
                })
            ]
        });
    }
}

export const LOGGER = WinstonLogger.getLogger();