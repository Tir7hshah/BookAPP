
import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbhFF6Z-pFIvqVGfJ3sjY2L106SnPxSQQ",
  authDomain: "assingment4-reactnative.firebaseapp.com",
  databaseURL: "https://assingment4-reactnative-default-rtdb.firebaseio.com",
  projectId: "assingment4-reactnative",
  storageBucket: "assingment4-reactnative.appspot.com",
  messagingSenderId: "687217446029",
  appId: "1:687217446029:web:535b6fb602f00420fea6c4"
};

// Initialize Firebase app
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; 
}

// Initialize Firebase Database
const database = getDatabase(app);

export { database };
