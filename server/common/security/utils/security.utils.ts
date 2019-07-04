import * as bcrypt from 'bcrypt';


class SecurityUtils extends BaseUtils {
    protected password : string;
    constructor(password) {
      super()
      this.password = password;
    }

    validatePassword(encryptedPassword) {
        return bcrypt.compare(this.password, String(encryptedPassword));
    }

    static getEncryptedPassword(password) {
        return bcrypt.hashSync(password, 8);
    }
}
export default SecurityUtils;
