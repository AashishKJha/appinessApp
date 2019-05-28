import jwt from 'jsonwebtoken';
import { ENV } from '../../../config/env.config';

export class TokenService {
    protected auth : any;
    protected userData : any;
    constructor(auth, userData) {
        this.auth = auth;
        this.userData = userData;
    }

    getAccessToken() {
        return jwt.sign({ userData: this.userData }, ENV.getVars('JWT_SECRET'), {
            expiresIn : parseInt(ENV.getVars('EXT'))
        });
    }

    getRefreshToken() {
        return jwt.sign({ userData: this.userData }, ENV.getVars('JWT_SECRET'),{
            expiresIn: parseInt(ENV.getVars('EXT'))
        });
    }

    static verifyToken(token) {
        return new Promise<any>((resolve, reject) => {
            jwt.verify(token, ENV.getVars('JWT_SECRET'), (err, data) => {
                console.log(err);
                if (err) {
                    resolve({ success: false });
                } else {
                    console.log(data)
                    resolve({ success: true, data });
                }
            });
        });
    }
}
