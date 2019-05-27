import { createConnection, Connection } from 'typeorm'
import { UserEntity } from '../app/auth/auth.entity';


export class DBConfig {

    private static dbConnection: Connection;

    public static async createDBConnection() {
        if (this.dbConnection && this.dbConnection.isConnected) {
            return this.dbConnection;
        } else {
            this.dbConnection = await createConnection({
                type: "mysql",
                username: ConfigOptions.userName,
                password: ConfigOptions.password,
                database: ConfigOptions.database,
                name: ConfigOptions.conncetionName,
                host: ConfigOptions.host,
                port: ConfigOptions.port,
                entities: [UserEntity]
            });
            return this.dbConnection;
        }
    }

    public static getDBConncetion() {
        return this.dbConnection;
    }

    public static getName(): string {
        return this.dbConnection.name;
    }
}

class ConfigOptions {

    public static database: string = "mean_db";

    public static type: string = "mysql";

    public static conncetionName: string = "mysql_db_connetion";

    public static userName: string = "root";

    public static password: string = "Demo@123";

    public static host: string = "localhost";

    public static port: number = 3306;

    private constructor() { }
}



