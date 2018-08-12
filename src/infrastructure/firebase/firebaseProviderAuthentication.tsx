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
            return new User(user.uid, splitName[0], splitName[1], user.email);
        } catch (error) {
            throw(error);
        }
    };

    public createUser = async (provider: Providers): Promise<User> => {
        return this.signIn(provider);
    };

    public logOut = async (): Promise<object> => {
        try {
            return await this.firebase.auth().signOut();
        } catch(error) {
            throw error
        }
    };

    public checkIfUserIsLoggedIn = async (userLoggedInHandler: (user: User | null) => void) => {
        this.firebase.auth().onAuthStateChanged((firebaseUser: any) => {
            if (!firebaseUser) {
                userLoggedInHandler(firebaseUser);
            } else {
                const firebaseAuthUser: IAuthUser = firebaseUser;
                const splitName = firebaseAuthUser.displayName.split(' ');
                const uid: string = firebaseAuthUser.uid;
                const user = new User(uid, splitName[0], splitName[1], firebaseUser.email);
                userLoggedInHandler(user);
            }
        });
    };
}