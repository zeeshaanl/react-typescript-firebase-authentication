import {IAuthentication} from "../service/Authentication";

export default class SignInUseCase {
    private authenticationService: IAuthentication;
    constructor(authenticationService: IAuthentication) {
        this.authenticationService = authenticationService;
    }

    public async invoke(...args: any[]) {
        await this.authenticationService.signIn(args);
    }
}