import { APP } from "../config/express.config";
import { IndexRoute } from './index.route';
import { DBConfig } from '../config/db.config';
import { LOGGER } from '../config/winston.config';
import { ENV } from '../config/env.config';

class Application {
    static runApp() {
        DBConfig.createDBConnection().then((ctn) => {
            let port = ENV.getVars('SERVER_PORT');
            APP.use('/api', IndexRoute.mergerRoutes()).listen(port, async () => {
                LOGGER.info("Server Is Running On Port : " + port)
            });
        })
    }
}

Application.runApp();
