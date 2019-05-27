
export class UserDTO {
    private user_name: string;
    private user_email: string;

    constructor() {}

    public get_user_name(): string {
        return this.user_name;
    }
    public set_user_name(value: string) {
        this.user_name = value;
    }

    public get_user_email(): string {
        return this.user_email;
    }
    public set_user_email(value: string) {
        this.user_email = value;
    }
}