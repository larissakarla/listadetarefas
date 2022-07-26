// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSITs8rWC0JLmVhVJCRBhgiWxPlIYju4E",
  authDomain: "listadetarefas-a4ee2.firebaseapp.com",
  projectId: "listadetarefas-a4ee2",
  storageBucket: "listadetarefas-a4ee2.appspot.com",
  messagingSenderId: "430678193126",
  appId: "1:430678193126:web:8bff87b3dc434d96025c27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db }