export class ClientResponse {
    protected message : any;
    protected success : boolean;
    constructor(success : boolean, message : any){
        this.success = success;
        this.message = message;
    }

    static createSucess(message : any){        
        return new ClientResponse(true, message)
    }

    static createFailure(message : any) {
        return new ClientResponse(false, message)
    }
}