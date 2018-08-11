import User from "../../domain/viewModel/User";

export interface IAuthentication {
    createUser(...args: any[]): Promise<User>;

    signIn(...args: any[]): Promise<User>;

    logOut(): Promise<object>;

    checkIfUserIsLoggedIn(userLoggedInHandler: (user: User | null) => void): void;
}