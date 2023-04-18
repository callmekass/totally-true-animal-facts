// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCbDw8-5ZRWKDNXCh7g3KKxhg2qL2F50Dw',
  authDomain: 'totally-true-animal-facts.firebaseapp.com',
  databaseURL: 'https://totally-true-animal-facts-default-rtdb.firebaseio.com',
  projectId: 'totally-true-animal-facts',
  storageBucket: 'totally-true-animal-facts.appspot.com',
  messagingSenderId: '780045823216',
  appId: '1:780045823216:web:ec2760b6b3c2710b442635',
  measurementId: 'G-15HY4XTHXF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
