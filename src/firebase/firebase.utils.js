import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBs4xABlgsp7kr7_2frRoFBJgzpLrAlciQ",
    authDomain: "lumber-clothing.firebaseapp.com",
    projectId: "lumber-clothing",
    storageBucket: "lumber-clothing.appspot.com",
    messagingSenderId: "288730446797",
    appId: "1:288730446797:web:0ccd54e430402b1350a284",
    measurementId: "G-19QKX42X5D"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const collectionRef = firestore.collection(`users`);
    const collectionSnapShot = await collectionRef.get();
    console.log({ collection: collectionSnapShot.docs.map( doc => doc.data()) });

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName: 'TEST USER',
                email: 'TEST@EXAMPLE.COM',
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.error('Could not create a user record in DB: ', error.message);
        }
    }

    return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach( obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return batch.commit()
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            routeName: decodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

   return transformedCollection.reduce((accumulator, collection) => {
       accumulator[collection.title.toLowerCase()] = collection;
       return accumulator;
   }, {})
}

firebase.initializeApp(config);

export const auth  = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;