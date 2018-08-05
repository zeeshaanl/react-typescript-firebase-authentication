import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAjtxmQD29dAeMruRmTjq7ZkHuCDjwm-as",
    authDomain: "test-f3f38.firebaseapp.com",
    databaseURL: "https://test-f3f38.firebaseio.com",
    messagingSenderId: "654369996275",
    projectId: "test-f3f38",
    storageBucket: "test-f3f38.appspot.com"
};

firebase.initializeApp(config);

export default firebase;