import { BaseModel } from '../interfaces/interface.model';

export abstract class BaseAbstractModel implements BaseModel {

    protected created_at = { type: Date, default : new Date(),  required: true };

    protected updated_at = { type: Date, default: new Date(), required: true };

    public get_created_at() {
        return this.created_at;
    }

    public set_created_at(date) {
        this.created_at = date;
    }
    public get_updated_at() {
        return this.updated_at;
    }

    public set_updated_at(date) {
        this.updated_at = date;
    }

    public toString(): string {
        return this.toString();
    }

}