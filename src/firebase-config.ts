import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pian-firebase-auth.firebaseapp.com",
  projectId: "pian-firebase-auth",
  storageBucket: "pian-firebase-auth.appspot.com",
  messagingSenderId: "295698836568",
  appId: "1:295698836568:web:14f5f5c28f05bfbcd76e2d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
