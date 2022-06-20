// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDomPoI-EkVSssGdmPrzOyt5jvuKSIGcsw",
  authDomain: "realtimeplayer-4f2ec.firebaseapp.com",
  databaseURL: "https://realtimeplayer-4f2ec-default-rtdb.firebaseio.com/",
  projectId: "realtimeplayer-4f2ec",
  storageBucket: "realtimeplayer-4f2ec.appspot.com",
  messagingSenderId: "432296251252",
  appId: "1:432296251252:web:40907400f93026a7ff6621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);