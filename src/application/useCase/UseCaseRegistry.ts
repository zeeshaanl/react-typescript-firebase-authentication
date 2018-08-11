import {IAuthentication} from "../service/Authentication";
import CreateUserUseCase from "./CreateUserUseCase";
import LogoutUseCase from "./LogoutUseCase";
import SignInUseCase from "./SignInUseCase";
import CheckIfUserIsSignedIn from "./CheckIfUserIsSignedIn";

export default class UseCaseRegistry {
    public createUserUseCase: CreateUserUseCase;
    public signInUseCase: SignInUseCase;
    public logoutUseCase: LogoutUseCase;
    public checkIfUserIsSignedIn: CheckIfUserIsSignedIn;

    constructor(authenticationService: IAuthentication) {
        this.createUserUseCase = new CreateUserUseCase(authenticationService);
        this.signInUseCase = new SignInUseCase(authenticationService);
        this.logoutUseCase = new LogoutUseCase(authenticationService);
        this.checkIfUserIsSignedIn = new CheckIfUserIsSignedIn(authenticationService)
    }
}