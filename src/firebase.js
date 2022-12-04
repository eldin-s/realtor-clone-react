// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuso2rI2yT3z5PvXXUEVnNa9mjed3laPA',
  authDomain: 'realtor-clone-react-2c66e.firebaseapp.com',
  projectId: 'realtor-clone-react-2c66e',
  storageBucket: 'realtor-clone-react-2c66e.appspot.com',
  messagingSenderId: '34098139633',
  appId: '1:34098139633:web:fa11cb4c2235bd99b43450',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
