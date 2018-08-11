import {IAuthentication} from "../service/Authentication";
import User from "../../domain/viewModel/User";

export default class CreateUserUseCase {
    private authenticationService: IAuthentication;

    constructor(authenticationService: IAuthentication) {
        this.authenticationService = authenticationService;
    }

    public invoke = async (...args: any[]): Promise<User> => {
        return this.authenticationService.createUser(args);
    }
}