import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEY9NcbLCRUo1bGQi8wFUEzo7N_B3j5B0",
  authDomain: "ahimsa-a62aa.firebaseapp.com",
  databaseURL: "https://ahimsa-a62aa.firebaseio.com",
  projectId: "ahimsa-a62aa",
  storageBucket: "ahimsa-a62aa.appspot.com",
  messagingSenderId: "736204403852",
  appId: "1:736204403852:web:45c3c91bc49e5b492eb7a9",
  measurementId: "G-X72F7SKDRR",
};
export const createUser = async (userAuth, displayName, note) => {
  //If no user in  logged in just return null

  //If user is logged in check if the user's data exists in the firebase databasey

  const useRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await useRef.get();
  if (!snapShot.exists) {
    const { email } = userAuth;

    const createdAt = new Date();
    try {
      await useRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return useRef;
};
//we can use batch processing
export const addDatatoFireBase = (collectionKey, objectToadd) => {
  const collectionRef = firestore.collection(collectionKey);

  objectToadd.forEach((object) => {
    collectionRef.doc().set(object);
  });
};
export const convertCollectionSnapshotToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
