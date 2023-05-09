import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCTRPz-NiX--MJcuyyT0bWDz8cjDc5rm1M",
  authDomain: "react-notes-41668.firebaseapp.com",
  projectId: "react-notes-41668",
  storageBucket: "react-notes-41668.appspot.com",
  messagingSenderId: "358647739595",
  appId: "1:358647739595:web:42ae1171d31ce3daf3574e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")