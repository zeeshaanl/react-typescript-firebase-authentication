import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './infrastructure/components/App/App';
import UseCaseRegistry from "./application/useCase/UseCaseRegistry";
import registerServiceWorker from './registerServiceWorker';

import './infrastructure/index.css';
import FirebaseProviderAuthentication from "./infrastructure/firebase/firebaseProviderAuthentication";
import * as firebase from 'firebase';
import firebaseConfig from './infrastructure/firebase/config';

firebase.initializeApp(firebaseConfig);

const firebaseProviderAuthentication = new FirebaseProviderAuthentication(firebase);
const useCaseRegistry = new UseCaseRegistry(firebaseProviderAuthentication);

ReactDOM.render(
    <App useCaseRegistry={useCaseRegistry} />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
