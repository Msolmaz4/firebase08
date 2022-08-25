import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

/**
 * firebase alinca direk boyle ama biy dkendimiz duyenlicegiy kodleri bir kismi silindi
 * const firebaseConfig = {
    apiKeI8NfcpZMIamT9s",
    authDomain: "logp.com",
    projectId: "loginreact-df48a",
    storageBucket: "t.com",
    messagingSenderId: "659289272402",
    appId: "1:61295b2f8b"
  };

  const app = initializeApp(firebaseConfig);
 * 
  ama biy yeniden yapacagiy

 */
const firebaseConfig = {
  apiKey: "AIzaSyAwYBo_k8D4Le8CkorYYVFFn4l_xRXcz1c",
  authDomain: "deneme-9b618.firebaseapp.com",
  projectId: "deneme-9b618",
  storageBucket: "deneme-9b618.appspot.com",
  messagingSenderId: "384532792619",
  appId: "1:384532792619:web:398a88e38241dc389b316e",
};

//degiskeni dogrulamak icin disariya aktariyoruz

const app = initializeApp(firebaseConfig);
const auth = getAuth();

/*
bu kismi ben yaptim bakarak  teniz ve guyel atta olan
export const adana =(email,password)=>{createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });}
*/

//bunu doc aldik ama bunu bir functiom yaazalaim
/* createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user; })
*/

//bunu bir foksixzonda zayalim guyel ve temiyu olan
//buradan biye userCCre.user doner doner biy bunu degisken atayarajk aladikconst { user}
export const register = async (email, password) => {
  //await //createUserWithEmailAndPassword(auth,email,password)
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  return user;
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const loginout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (err) {
    console.log(err);
  }
};

export default app;
