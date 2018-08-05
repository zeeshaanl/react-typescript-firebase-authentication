import {IAuthentication} from "../../application/service/Authentication";
import User from "../../domain/viewModel/User";

type Providers = 'google' | 'facebook';

interface IAuthUser {
    displayName: string,
    email: string,
    photoURL: string,
    emailVerified: string,
    uid: string
}

interface IAuthResult {
    user: IAuthUser
}

export default class FirebaseProviderAuthentication implements IAuthentication {
    private readonly providerMap: object;
    private firebase: any;

    constructor(firebase: any) {
        this.firebase = firebase;
        this.providerMap = {
            facebook: new this.firebase.auth.FacebookAuthProvider(),
            google: new this.firebase.auth.GoogleAuthProvider(),
        };
    }

    public signIn = async (provider: Providers): Promise<User> => {
        try {
            const result: IAuthResult = await this.firebase.auth().signInWithPopup(this.providerMap[provider]);
            const user: IAuthUser = result.user;
            const splitName = user.displayName.split(' ');
            return new User(splitName[0], splitName[1], user.email);
        } catch (error) {
            throw(error);
        }
    };

    public logOut = async (): Promise<object> => {
        return {}
    };
}