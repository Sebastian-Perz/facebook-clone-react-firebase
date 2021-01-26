import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHOQWLfROqmayDLgGelXpP2krgB8HBeeU",
  authDomain: "facebook-clone-c7f93.firebaseapp.com",
  projectId: "facebook-clone-c7f93",
  storageBucket: "facebook-clone-c7f93.appspot.com",
  messagingSenderId: "68467365312",
  appId: "1:68467365312:web:fc9bd70ccbbdae6698e425",
  measurementId: "G-CK5Y4D8BP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
