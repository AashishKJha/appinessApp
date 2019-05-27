import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseAbstractModel } from '../../common/abstract/abstract.model';

@Entity({ name: "user_table" })
export class UserEntity extends BaseAbstractModel {

    public static _obj: UserEntity;

    @PrimaryGeneratedColumn({ name: "user_id" })
    user_id: number;

    @Column({ name: "user_name", nullable: false, unique: false, length: 100 })
    user_name: string;

    @Column({ name: "user_email", length: 100, nullable: false, unique: true })
    user_email: string;

    private constructor() {
        super()
    }

    public set_user_name(user_name: string) {
        this.user_name = user_name
    }

    public get_user_name(): string {
        return this.user_name
    }

    public set_user_email(user_email: string) {
        this.user_email = user_email
    }

    public get_user_email(): string {
        return this.user_email
    }

    public static _instance(): UserEntity {
        if (!this._obj) {
            this._obj = new UserEntity();
        }
        return this._obj
    }

    public toString(): string {
        return JSON.stringify(UserEntity._obj);
    }
}

export const userEntity = UserEntity._instance();