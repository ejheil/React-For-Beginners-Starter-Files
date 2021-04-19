import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtxprPOcSkVpmhHFTwvYnDrQlawe5WF7I",
    authDomain: "catchoftheday-edheil.firebaseapp.com",
    databaseURL: "https://catchoftheday-edheil-default-rtdb.firebaseio.com",
    appId: "1:359129652624:web:074fce32de238cd225e715"
  }
);

const base = Rebase.createClass(firebaseApp.database());

// this is a named export

export { firebaseApp };

export default base;
