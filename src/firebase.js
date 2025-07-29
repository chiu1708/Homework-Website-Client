import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAFmIOY4D5oi9FFtAKcj4h4S6bDeMm5m-M",
  authDomain: "homework-website-d97b6.firebaseapp.com",
  projectId: "homework-website-d97b6",
  storageBucket: "homework-website-d97b6.firebasestorage.app",
  messagingSenderId: "173760175383",
  appId: "1:173760175383:web:9c716094ec12f96f4bab52",
  measurementId: "G-BKCX9HKQPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeFirestore(app, 
  {localCache: 
    persistentLocalCache(/*settings*/{tabManager: persistentMultipleTabManager()})
  });

export const db = getFirestore(app);
