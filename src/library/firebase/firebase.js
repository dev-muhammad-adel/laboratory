import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import ReduxSagaFirebase from "redux-saga-firebase";
import isoConfig from "@iso/config/firebase.config";
import "firebase/analytics";
import "firebase/performance";

// Example if anyone want to use different config for production and development using .env

// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
// };
// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };
// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
// !firebase.apps.length ? firebase.initializeApp(isoConfig) : firebase.app();

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp({
      apiKey: "AIzaSycvgbhnjmkyg3sw",
      authDomain: "ldcvgbhneapp.com",
      projectId: "locgvbhny-7d612",
      storageBucket: "cvbhot.com",
      messagingSenderId: "348025124062",
      appId: "1:fvgbh:whbegbhb:56y",
      measurementId: "G-TN1QGTJB5T",
    })
  : firebase.app();
//export const analytics = firebase.analytics();
// Initialize Performance Monitoring and get a reference to the service
//export const perf = firebase.performance();

export const auth = firebase.auth();
export const db = firebase.firestore();
export const rsf = new ReduxSagaFirebase(firebaseApp);
export default firebase;
