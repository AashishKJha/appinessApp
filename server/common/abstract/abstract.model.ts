import { BaseModel } from '../interfaces/interface.model';

export abstract class BaseAbstractModel implements BaseModel {

    protected created_at: Date;

    protected updated_at: Date;

    public get_created_at(): Date{
        return this.created_at;
    }

    public set_created_at(date: Date) : void{
        this.created_at = date;
    }
    public get_updated_at(): Date {
        return this.updated_at;
    }

    public set_updated_at(date: Date) {
        this.updated_at = date;
    }

    public toString(): string {
        return this.toString();
    }

}