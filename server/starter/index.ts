import { APP } from "../config/express.config";
import { IndexRoute } from './index.route';
import { DBConfig } from '../config/db.config';
import { ServerConfig } from '../config/server.config';
import { LOGGER } from '../config/winston.config';
import { ENV } from '../config/env.config';
import { UserRepo } from '../app/auth/auth.repo';
import { userEntity } from '../app/auth/auth.entity';

class Application {
    static runApp() {
        console.log(process.argv);
        console.log(process.argv0);
        console.log(process.env);

        // LOGGER.log('info', "Logger Runing");
        // DBConfig.createDBConnection().then(async (cI) => {
        //     await cI.synchronize()
        //     const userRepo = cI.getCustomRepository(UserRepo);
        //     userEntity.set_user_email('aashish2@aashish.com')
        //     userEntity.set_user_name('Aashish')
        //     userRepo.save(userEntity).then((d) => {
        //         LOGGER.info(d.toString());
        //         cI.synchronize();
        //     }).catch((err) => { LOGGER.error(err) });
        //     APP.use('/api', IndexRoute.mergerRoutes()).listen(ServerConfig.serverPort, async () => {
        //         console.log("Server Is Running On Port : " + ServerConfig.serverPort)
        //     });
        // }).catch((err) => {
        //     console.log(err);
        // })
    }

    static initiateApp() {
        const envArs = ENV.getArgs();
        switch (envArs[2]) {
            case '--dev': {
                LOGGER.info("Server Running in Dev Env");
                break;
            }
            case '--prod': {
                LOGGER.info("Server Running in Prod Env");
                break;
            }
            case '--test': {
                LOGGER.info("Server Running in Test Env");
                break;
            }
            default: {
                LOGGER.info("Server Running in Dev Env");
                break;
            }
        }
    }

}

Application.runApp();
