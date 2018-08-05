import * as React from 'react';
import {Well} from 'react-bootstrap';
import User from "../../../domain/viewModel/User";
import firebase from '../../firebase/firebase'
import FirebaseProviderAuthentication from "../../firebase/firebaseProviderAuthentication";
import Description from "../Description";
import Header from "../Header";
import './App.css';

interface IAppState {
    user?: User
}

class App extends React.Component {
    public state: IAppState = {
        user: undefined
    };

    private firebaseProviderAuthentication: FirebaseProviderAuthentication;

    constructor(props: any) {
        super(props);
        this.firebaseProviderAuthentication = new FirebaseProviderAuthentication(firebase)
    }


    public render() {
        const titleText = this.state.user ? `Welcome ${this.state.user.firstName}` : 'React Typescript Firebase Authentication'
        return (
            <div className="App">
                <header className="App-header">
                    <Header text={titleText} />
                </header>
                <main>
                    <Description countBy={11} />
                    <br />
                    <Well>
                        {!this.state.user ?
                            <div>
                                <h1>Google Login</h1>
                                <button onClick={this.handleGoogleLogin}>Login</button>
                            </div> :
                            <button onClick={this.handleGoogleLogout}>Logout</button>
                        }
                    </Well>
                </main>
            </div>
        );
    }

    private handleGoogleLogin = async () => {
        try {
            const user: User = await this.firebaseProviderAuthentication.signIn('google');
            this.setState({user});
        } catch (error) {
            console.log(error, 'Error in login');
        }
    };

    private handleGoogleLogout = () => {
        // sd
    };
}

export default App;
