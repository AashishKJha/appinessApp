import { ENV } from './env.config';

export class ServerConfig {

    public static serverName: string = ENV.getVars('SERVER_NAME');

    public static serverPort: string = ENV.getVars('SERVER_PORT');

    private constructor() {

    }

    static initiateApp() {
        const envArgs = process.argv;
        envArgs.forEach(e => {
            console.log(e);
        });

        if (envArgs[2] == 'dev') {
            console.log("Server Runing In Development Enviornment");
        }
        if (envArgs[2] == 'prod') {
            console.log("Server Runing In Development Enviornment");
        }
    }
}