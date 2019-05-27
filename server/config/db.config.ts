import mongoose, { Mongoose } from 'mongoose';
import { ENV } from './env.config';


export class DBConfig {

    private static dbConnection: Mongoose;

    public static async createDBConnection() {
        if (this.dbConnection) {
            return this.dbConnection;
        } else {
            this.dbConnection = await mongoose.connect(ENV.getVars('MONGOURL') + ENV.getVars('DBNAME'), { useNewUrlParser: true })
            return this.dbConnection;
        }
    }
}




