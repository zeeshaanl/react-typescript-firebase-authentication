import {IAuthentication} from "../service/Authentication";
import User from "../../domain/viewModel/User";

export default class CheckIfUserIsSignedIn {
    private authenticationService: IAuthentication;

    constructor(authenticationService: IAuthentication) {
        this.authenticationService = authenticationService;
    }

    public async invoke(userLoggedInHandler: (user: User | null) => void) {
        await this.authenticationService.checkIfUserIsLoggedIn(userLoggedInHandler)
    }
}