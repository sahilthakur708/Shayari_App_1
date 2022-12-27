import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC4k1W2nCLh1SVrZaW3SkQoGjv-RW7P544',
  authDomain: 'shayari-app-test.firebaseapp.com',
  projectId: 'shayari-app-test',
  storageBucket: 'shayari-app-test.appspot.com',
  messagingSenderId: '373084111403',
  appId: '1:373084111403:web:51336e921a6efeb7fee06e',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
