import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDpLViRHr0pxo7nKKqCLGWLS-Qe4YG9LXs",
  authDomain: "vue-cli-practice-45048.firebaseapp.com",
  projectId: "vue-cli-practice-45048",
  storageBucket: "vue-cli-practice-45048.appspot.com",
  messagingSenderId: "684461468919",
  appId: "1:684461468919:web:1cba17f430b6bacbf837f2",
  measurementId: "G-HPPY63K7G2"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// export firestore
export { projectFirestore }