// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP-809gUZ9otWpa6eEB2RT3xepTdTGQes",
  authDomain: "bajranglatkan.firebaseapp.com",
  projectId: "bajranglatkan",
  storageBucket: "bajranglatkan.appspot.com",
  messagingSenderId: "803655636643",
  appId: "1:803655636643:web:07f9bfee739b5acf2b5116",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
