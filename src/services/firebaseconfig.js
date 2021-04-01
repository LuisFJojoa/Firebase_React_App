import firebase from "firebase"
import 'firebase/firebase-storage'
import 'firebase/auth'
import firebaseConfig from '../config/configFirebase'

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
export const store = fire.firestore();

export default auth