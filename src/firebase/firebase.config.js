// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

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
