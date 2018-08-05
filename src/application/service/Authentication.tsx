import User from "../../domain/viewModel/User";

enum Provider {
    'google',
    'facebook'
}

export interface IAuthentication {
    createUser?(): Promise<User>;

    // providerSignIn?(provider: Provider): Promise<User>;

    signIn?(...args: any[]): Promise<User>;

    logOut(): Promise<object>;
}