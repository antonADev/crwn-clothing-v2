import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA_6R-6yH6xd_vy_BWiVMkSRjqW3NyFnbo',

  authDomain: 'crwn-clothing-db-1468f.firebaseapp.com',

  projectId: 'crwn-clothing-db-1468f',

  storageBucket: 'crwn-clothing-db-1468f.appspot.com',

  messagingSenderId: '110210074772',

  appId: '1:110210074772:web:156b52a97d2df4940b8c81',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
    return userDocRef;
  }
  //if user data does not exist
  //create / set the document with the dara from userAuth in my collection

  //if user data exists

  //return userDocRef
};
