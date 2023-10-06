// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtS0V2bdi8jgSVV_WRv2E2C6d93ZJJC14",
  authDomain: "travel-guru-react-auth-985b9.firebaseapp.com",
  projectId: "travel-guru-react-auth-985b9",
  storageBucket: "travel-guru-react-auth-985b9.appspot.com",
  messagingSenderId: "180362337304",
  appId: "1:180362337304:web:97ec30ae8f55ed2b88376d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;