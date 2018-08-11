import * as React from 'react';
import {Well} from 'react-bootstrap';
import User from "../../../domain/viewModel/User";
import firebase from '../../firebase/config'
import FirebaseProviderAuthentication from "../../firebase/firebaseProviderAuthentication";
import Description from "../Description";
import Header from "../Header";
import './App.css';
import UseCaseRegistry from "../../../application/useCase/UseCaseRegistry";

interface IState {
    user?: User,
    loadingAuth: boolean
}

interface IProps {
    useCaseRegistry: UseCaseRegistry
}

class App extends React.Component<IProps, IState> {
    public state: IState = {
        loadingAuth: true,
        user: undefined
    };

    public componentDidMount() {
        this.getLoggedInUser();
    }

    public render() {
        const {user, loadingAuth} = this.state;
        const titleText = this.state.user ? `Welcome ${this.state.user.firstName}` : 'React Typescript Firebase Authentication';
        return (
            <div className="App">
                <header className="App-header">
                    <Header text={titleText} />
                </header>
                <main>
                    <Description countBy={11} />
                    <br />
                    <Well>
                        {!loadingAuth && !user ?
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
            const user: User = await this.props.useCaseRegistry.createUserUseCase.invoke('google');
            this.setState({user});
        } catch (error) {
            console.log(error, 'Error in login');
        }
    };

    private handleGoogleLogout = async () => {
        try {
            const result = await this.props.useCaseRegistry.logoutUseCase.invoke();
            console.log(result, 'logout result');
        } catch (error) {
            console.log(error, 'Error in logout');
        }
    };

    private getLoggedInUser = () => {
        // if !this.props.user
        this.props.useCaseRegistry.checkIfUserIsSignedIn.invoke((user: User) => {
            console.log(user, 'user');
            this.setState({user, loadingAuth: false})
        });
    }
}

export default App;
