import { BaseAbstractModel } from '../../common/abstract/abstract.model';
import mongoose, { Schema } from 'mongoose'

export class UserEntity extends BaseAbstractModel {

    public static _obj: any;

    public static auth_model : any ;

    user_name =  { minlength: 5, maxlength: 50, type: String, required: true};

    user_email = { type :String , maxlength: 50, unique: true, required: true};

    user_password = { type : String ,required: true };

    user_mobile_number = { type: String, minlength: 10, maxlength : 15, unique : true, required:true} ;

    user_role = new Schema({
        code: { type: String, required: true },
        name: { type: String}
    });

    user_dob = {type : Date, required : true};

    user_gender = new Schema({ 
        code : {type : String, required : true},
        name: { type: String }
    });

    user_address = { type : String, required : true}

    constructor() {
        super()
    }

    public set_user_name(user_name) {
        this.user_name = user_name
    }

    public get_user_name() {
        return this.user_name
    }

    public set_user_email(user_email) {
        this.user_email = user_email
    }

    public get_user_email() {
        return this.user_email
    }

    public static _instance() {
        if (!this._obj) {
            this._obj = new UserEntity();
        }
        return this._obj;
    }

    public toString(): string {
        return JSON.stringify(UserEntity._obj);
    }
}

export const userEntity :any = UserEntity._instance();

export const AUTH_MODEL = mongoose.model('UserModel', new mongoose.Schema(userEntity))
