import { Column } from 'typeorm';
import { BaseModel } from '../interfaces/interface.model';


export abstract class BaseAbstractModel implements BaseModel {

    @Column({ name: 'created_at', nullable: false })
    protected created_at: Date = new Date();

    @Column({ name: 'updated_at', nullable: false })
    protected updated_at: Date = new Date();

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