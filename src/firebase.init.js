
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHvYofkY0EyEcs_T5OINv_BqIy1Q-jTQY",
  authDomain: "fir-hook-461a8.firebaseapp.com",
  projectId: "fir-hook-461a8",
  storageBucket: "fir-hook-461a8.appspot.com",
  messagingSenderId: "811579760124",
  appId: "1:811579760124:web:b4eff5e446cc2a78f0a679"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;