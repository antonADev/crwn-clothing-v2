import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmrBjaLallfEA7VDUeNwOvyuXxUjKCQ8I',
  authDomain: 'test-7af67.firebaseapp.com',
  projectId: 'test-7af67',
  storageBucket: 'test-7af67.appspot.com',
  messagingSenderId: '203227103409',
  appId: '1:203227103409:web:3b5e811c5c5b51cbbd6290',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
