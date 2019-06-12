import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: 'AIzaSyDeIjZqQ26u9zcLP0RFWjrLsSF85Q9JDoA',
  authDomain: 'frontend-template-test.firebaseapp.com',
  databaseURL: 'https://frontend-template-test.firebaseio.com',
  projectId: 'frontend-template-test',
  storageBucket: 'frontend-template-test.appspot.com',
  messagingSenderId: '59991013837',
  appId: '1:59991013837:web:3fcfd25df1a9f5ac'
};

class Firebase {
  constructor() {
    // https://github.com/zeit/next.js/issues/1999
    if (!app.apps.length) {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.firestore();
      this.providers = {
        google: new app.auth.GoogleAuthProvider()
      };
    }
  }

  async register(name, email, password) {
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithPopup(provider) {
    return this.auth.signInWithPopup(this.providers[provider]);
  }

  logout() {
    return this.auth.signOut();
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
