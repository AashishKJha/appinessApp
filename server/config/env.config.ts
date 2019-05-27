import { config } from 'dotenv'

class EnvConfigs {

    private static _instance: EnvConfigs;

    private constructor() {
        config();
    }

    /**
     * singleton instance.
     */
    public static _env(): EnvConfigs {
        if (!this._instance) {
            this._instance = new EnvConfigs();
        }
        return this._instance;
    }

    getVars(key: string) {
        return process.env[key];
    }

    getArgs(): Array<string> {
        return process.argv
    }
}

export const ENV : EnvConfigs = EnvConfigs._env();