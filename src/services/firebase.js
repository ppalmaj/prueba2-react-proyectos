import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBy0gXV1gbiIfILQnZEmYhiRb0gaziYdA",
  authDomain: "prueba2-react.firebaseapp.com",
  projectId: "prueba2-react",
  storageBucket: "prueba2-react.firebasestorage.app",
  messagingSenderId: "963375417257",
  appId: "1:963375417257:web:e9359b20ee4dd1ba2826b8",
  measurementId: "G-VR94XSMGMW"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const functions = getFunctions(app);

export default app;