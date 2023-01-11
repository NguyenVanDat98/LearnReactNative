import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseCfg = {
  apiKey: 'AIzaSyD4NW466CndhoFxG7jwueZMpzYXOYjDNIw',
  authDomain: 'internburger-6dd37.firebaseapp.com',
  databaseURL:
    'https://internburger-6dd37-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'internburger-6dd37',
  storageBucket: 'internburger-6dd37.appspot.com',
  messagingSenderId: '650154867699',
  appId: '1:650154867699:web:a93124bfc9cd9e42127086',
  measurementId: 'G-ZKVG7P74P6',
};

  firebase.initializeApp(firebaseCfg);


export {firebase};
