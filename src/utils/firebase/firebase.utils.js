import { initializeApp } from 'firebase/app';
<<<<<<< HEAD
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
=======
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

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
>>>>>>> reversedReduxToContext
  prompt: 'select_account',
});

export const auth = getAuth();
<<<<<<< HEAD

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
=======
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};
// Commented out to reverse Redux to Context
// export const getCategoriesAndDocuments = async () => {
//   const collectionRef = collection(db, 'categories');
//   const q = query(collectionRef);

//   const querySnapshop = await getDocs(q);

//   return querySnapshop.docs.map((docSnapshot) => docSnapshot.data());
// };

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

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
        ...additionalInformation,
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
>>>>>>> reversedReduxToContext
