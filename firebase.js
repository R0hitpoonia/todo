import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxLBM5jCQGehEp0I0IMlbytDMjG_FGUH4",
  authDomain: "todo-cfb7a.firebaseapp.com",
  projectId: "todo-cfb7a",
  storageBucket: "todo-cfb7a.appspot.com",
  messagingSenderId: "1082713926131",
  appId: "1:1082713926131:web:e10efbd6855e6fa49d0a86",
  measurementId: "G-C8DLCW0MNJ",
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app);
